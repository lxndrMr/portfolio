import portrait from "@/public/portrait.jpg";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { FaGithubSquare } from "react-icons/fa";
import { HiDownload } from "react-icons/hi";
import { useActiveSectionContext } from "../context/active-section-context";
import { useSectionInView } from "../lib/hooks";

export default function Intro() {
  const { ref } = useSectionInView("Accueil", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();
  return (
    <section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem] relative"
      id="home"
    >
      <div className="flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ type: "tween", duration: 0.2 }}
        >
          <Image
            src={portrait}
            alt="Portrait d'Alexandre Moro, développeur full stack"
            width="200"
            height="200"
            quality="100"
            className="h-36 w-36 border-[0.35rem] border-white rounded-full object"
          />
        </motion.div>
      </div>
      <motion.h1
        className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
      >
        <span className="font-bold">Salut, je suis Alex</span> développeur{" "}
        <span className="font-bold">full stack</span>, qui aime
        <span className="italic"> créer des applications</span> avec
        <span className="underline"> React(Next.js).</span>
      </motion.h1>
      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center font-medium text-lg gap-2
          px-4"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        <Link
          href="#contact"
          className="group bg-gray-950 text-white flex items-center gap-2 px-7 py-3 rounded-full
            outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105
            transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contactez moi{" "}
          <BsArrowRight className="opcity-70 group-hover:translate-x-1 transition" />
        </Link>
        <a
          href="/CV-alexandre-moro.pdf"
          download
          className="group bg-white flex items-center gap-2 px-7 py-3 rounded-full outline-none
            focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer
            borderBlack dark:bg-white/10"
        >
          Télécharger mon CV{" "}
          <HiDownload className="opacity-70 group-hover:translate-y-1 transition" />
        </a>
        <a
          href="https://www.linkedin.com/in/alexandre-moro-adrale/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-700 flex items-center gap-2 p-4 text-[1.2rem] rounded-full
            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
            transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <BsLinkedin />
        </a>
        <a
          href="https://github.com/lxndrMr"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white text-gray-700 flex items-center gap-2 p-4 text-[1.35rem] rounded-full
            focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105
            transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
