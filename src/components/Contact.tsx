import { motion } from "framer-motion";
import { FaPaperPlane } from "react-icons/fa";
import { useSectionInView } from "../lib/hooks";
import SectionHeading from "./SectionHeading";

export default function Contact() {
  const { ref } = useSectionInView("Contact");
  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%, 38rem)] text-center"
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
    >
      <SectionHeading>Contact me</SectionHeading>
      <p className="text-gray-700 -mt-6">
        Please contact me directly at{" "}
        <a className="underline" href="mailto:alexandre.moro.24@gmail.com">
          alexandre.moro@gmail.com
        </a>{" "}
        or throught this form.
      </p>
      <form className="group mt-10 flex flex-col">
        <input
          className="h-14 rounded-lg borderBlack px-4"
          type="email"
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 px-4"
          name=""
          id=""
          placeholder="Your message"
        ></textarea>
        <button
          className="flex items-center justify-center gap-2 h-[3rem] w-[8rem] rounded-full
            bg-gray-900 outline-none transition-all text-white focus:scale-110
            hover:scale-110 active:scale-105 hover:bg-gray-950"
          type="submit"
        >
          Submit{" "}
          <FaPaperPlane
            className="text-xs opacity-70 transition-all group-hover:translate-x-1
              group-hover:-translate-y-1"
          />
        </button>
      </form>
    </motion.section>
  );
}
