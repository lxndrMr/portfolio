"use server";

import React from "react";
import { Resend } from "resend";
import ContactFormEmail from "../email/contact-form-email";
import { getErrorMessage, validateString } from "../lib/utils";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formdata: FormData) => {
  const message = formdata.get("message");
  const email = formdata.get("email");

  if (!validateString(message, 5000) || !validateString(email, 50)) {
    return;
  }
  let data;
  try {
    data = await resend.emails.send({
      from: "Contact from <onboarding@resend.dev>",
      to: "alexandre.moro@live.fr",
      subject: "Message from contact form",
      replyTo: email as string,
      text: message as string,
      react: React.createElement(ContactFormEmail, {
        message: message as string,
        email: email as string,
      }),
    });
  } catch (error: unknown) {
    return {
      error: getErrorMessage(error),
    };
  }

  return { data };
};
