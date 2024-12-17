import { SetStateAction } from "react";
import { links, projectsData } from "./data";

export type ProjectProps = (typeof projectsData)[number];

export type SectionName = (typeof links)[number]["name"];

export type ActiveSectionContextProviderProps = {
  children: React.ReactNode;
};

export type ActiveSectionContextType = {
  activeSection: SectionName;
  setActiveSection: React.Dispatch<SetStateAction<SectionName>>;
  timeOfLastClick: number;
  setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export type ContactFormEmailProps = {
  message: string;
  email: string;
};

export type Theme = "light" | "dark";

export type ThemeContextTypeProps = {
  children: React.ReactNode;
};

export type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};
