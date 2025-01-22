import { motion } from "framer-motion";
import toast from "react-hot-toast";
import { sendEmail } from "../actions/sendEmail-action";
import { useSectionInView } from "../lib/hooks";
import SectionHeading from "./SectionHeading";
import SubmitButton from "./SubmitButton";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center relative"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>contactez moi</SectionHeading>
      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Vous pouvez me contacter directement via ce formulaire.
      </p>
      <form
        className="group mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const result = await sendEmail(formData);

          if (result?.error) {
            toast.error(result.error);
            return;
          }
          toast.success("Message sent successfully");
        }}
      >
        <input
          className="h-14 rounded-lg borderBlack px-4 dark:bg-white dark:bg-opacity-80
            dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="email"
          type="email"
          placeholder="Votre email"
          required
          maxLength={50}
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 px-4 dark:bg-white dark:bg-opacity-80
            dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Votre message"
          required
          maxLength={5000}
        ></textarea>
        <div className="flex justify-center">
          <SubmitButton aria-label="Envoyer le formulaire" />
        </div>
      </form>
    </motion.section>
  );
}
