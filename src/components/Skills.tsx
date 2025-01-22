import { motion } from "framer-motion";
import { skillsData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import SectionHeading from "./SectionHeading";

const fadeInAnimationVarirants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.05 * index,
    },
  }),
};

export default function Skills() {
  const { ref } = useSectionInView("Compétences");
  return (
    <section
      className="mb-28 max-w-[53rem] text-center sm:mb-40 scroll-mt-28 relative"
      ref={ref}
      id="skills"
    >
      <SectionHeading>Mes compétences</SectionHeading>
      <ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-800">
        {skillsData.map((skill, index) => (
          <motion.li
            variants={fadeInAnimationVarirants}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
            custom={index}
            className="bg-white hover:bg-gray-100 borderBlack text-4xl rounded-xl px-5 py-3
              dark:bg-white/10 dark:hover:bg-white/20 dark:text-white/80 sm:text-7xl"
            key={index}
            style={{ color: skill.color }}
          >
            {skill.icon}
          </motion.li>
        ))}
      </ul>
    </section>
  );
}
