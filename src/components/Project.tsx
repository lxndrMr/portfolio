import { ProjectProps } from "@/src/lib/types";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import toast from "react-hot-toast";
import { MdArrowOutward } from "react-icons/md";

export default function Project({
  title,
  description,
  tags,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });

  const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgress,
        opacity: opacityProgress,
      }}
      className="mb-3 sm:mb-8 last:mb-0 group"
      id="projects"
    >
      <section
        className="sm:group-even:pl-8 bg-gray-100 max-w-[42rem] borderBlack overflow-hidden sm:pr-8
          relative sm:h-[20rem] hover:bg-gray-200 transition rounded-lg dark:bg-white/10
          dark:hover:bg-white/20"
      >
        <div
          className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full
            sm:group-even:ml-[18rem]"
        >
          <h3 className="font-semibold text-2xl">{title}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tags.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white
                  rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>
        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
            transition group-hover:scale-[1.04] group-hover:-translate-x-3
            group-hover:translate-y-3 group-hover:-rotate-2
            group-even:group-hover:translate-x-3 group-even:group-hover:translate-y-3
            group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
        />
        <div className="sm:group">
          <Link
            className="absolute top-5 right-5 sm:top-11 sm:right-10 text-gray-700 dark:text-white/70
              sm:group-odd:left-72"
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              toast("Refonte en cours", {
                style: {
                  background: "#4CAF50",
                  color: "#fff",
                },
              });
            }}
          >
            <MdArrowOutward
              className="hover:translate-x-1 transition hover:rotate-45 focus:scale-110 hover:scale-110
                active:scale-105 cursor-pointer"
              size={20}
            />
          </Link>
        </div>
      </section>
    </motion.div>
  );
}
