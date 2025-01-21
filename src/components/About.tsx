"use client";

import { motion } from "framer-motion";
import { useSectionInView } from "../lib/hooks";
import SectionHeading from "./SectionHeading";

export default function About() {
  const { ref } = useSectionInView("À propos");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[50rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>À propos de moi</SectionHeading>
      <p className="mb-3">
        Après une carrière dans la{" "}
        <span className="font-medium">
          restauration d'une dizaine d'années,{" "}
        </span>{" "}
        je me dirige avec passion vers le secteur du développement web. Je me
        suis inscrit à la Wild Code School pour me former{" "}
        <span className="font-medium">au dévelopement web full-stack</span>.{" "}
        <span className="italic">Ce que j'adore dans la programmation</span>,
        c'est son immensité : un problème peut avoir plusieurs solutions, ce qui
        stimule la réflexion et la créativité. J'adore{" "}
        <span className="underline">ressentir cette satisfaction</span> lorsque
        je trouve enfin une solution à un problème complexe. Ma stack principale
        comprend{" "}
        <span className="font-medium">
          React, Next.js, Node.js, et PostGreSQL
        </span>
        . Je suis également familier avec TypeScript et Prisma. Je suis à la
        recherche d’une opportunité pour effectuer mon alternance ou pour
        intégrer un <span className="font-medium">poste de développeur</span>.
        Mon objectif est de devenir un développeur compétent et polyvalent.
      </p>
      <p>
        <span className="italic">En dehors du code</span>, j'aime pratiquer
        l'escalade, jouer aux échecs (même si je suis encore débutant !), la
        cuisine, mes amis et jouer avec mon chat. J'aime{" "}
        <span className="font-medium">apprendre de nouvelles choses</span>.
      </p>
    </motion.section>
  );
}
