import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import React from "react";
import { BiLogoTailwindCss } from "react-icons/bi";
import { FaCss3Alt, FaGithub, FaHtml5, FaJs, FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import {
  SiExpress,
  SiFramer,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiTypescript,
} from "react-icons/si";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Wild Code School Bootcamp",
    location: "Bordeaux, FR",
    description:
      "J'ai obtenu mon diplôme DWWM, RNCP niveau 5 après 5 mois d'études.",
    icon: React.createElement(LuGraduationCap),
    date: "2024",
  },
] as const;

export const projectsData = [
  {
    title: "Wild Eats",
    description:
      "Projet réalisé en équipe, est une application web qui référence les restaurants autour du Campus WCS.",
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: corpcommentImg,
  },
  {
    title: "Nebula",
    description: `Projet réalisé en équipe, est une application de voyage
interstellaire autour du jeu “Star Citizen”`,
    tags: ["React", "SCSS"],
    imageUrl: rmtdevImg,
  },
  {
    title: "Externatic",
    description:
      "Projet réalisé en équipe, est une application web de recrutement spécialisé dans les métiers de l'informatique et du digital.",
    tags: ["React", "Node.js", " Express.js", "MySQL", "Tailwind"],
    imageUrl: wordanalyticsImg,
  },
] as const;

export const testsData = [
  {
    title: "Rocks-Paper-Scissors",
    description:
      "I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
    tags: ["React", "Next.js", "Tailwind", "Shadcn"],
    imageUrl: corpcommentImg,
  },
] as const;

export const skillsData = [
  {
    title: "HTML",
    icon: React.createElement(FaHtml5),
    color: "#E34F26",
  },
  {
    title: "CSS",
    icon: React.createElement(FaCss3Alt),
    color: "#1572B6",
  },
  {
    title: "JavaScript",
    icon: React.createElement(FaJs),
    color: "#F7DF1E",
  },
  {
    title: "TypeScript",
    icon: React.createElement(SiTypescript),
    color: "#3178C6",
  },
  {
    title: "React",
    icon: React.createElement(FaReact),
    color: "#61DAFB",
  },
  {
    title: "Next.js",
    icon: React.createElement(SiNextdotjs),
    color: "#000000",
  },
  {
    title: "Node.js",
    icon: React.createElement(SiNodedotjs),
    color: "#339933",
  },
  {
    title: "Git",
    icon: React.createElement(FaGithub),
    color: "#F05032",
  },
  {
    title: "Tailwind",
    icon: React.createElement(BiLogoTailwindCss),
    color: "#38B2AC",
  },
  {
    title: "Prisma",
    icon: React.createElement(SiPrisma),
    color: "#2D3748",
  },
  {
    title: "Express",
    icon: React.createElement(SiExpress),
    color: "#000000",
  },
  {
    title: "PostgreSQL",
    icon: React.createElement(SiPostgresql),
    color: "#336791",
  },
  {
    title: "Framer Motion",
    icon: React.createElement(SiFramer),
    color: "#FF0080",
  },
] as const;
