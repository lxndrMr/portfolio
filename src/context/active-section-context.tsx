"use client";

import { createContext, useContext, useState } from "react";
import {
  ActiveSectionContextProviderProps,
  ActiveSectionContextType,
  SectionName,
} from "../lib/types";

export const ActiveSectionContext =
  createContext<ActiveSectionContextType | null>(null);

export default function ActiveSectionContextProvider({
  children,
}: ActiveSectionContextProviderProps) {
  const [activeSection, setActiveSection] = useState<SectionName>("Accueil");
  const [timeOfLastClick, setTimeOfLastClick] = useState(0);
  // we need to keep track of this to disable the observer temporarily when the user clicks on a link

  return (
    <ActiveSectionContext.Provider
      value={{
        activeSection,
        setActiveSection,
        timeOfLastClick,
        setTimeOfLastClick,
      }}
    >
      {children}
    </ActiveSectionContext.Provider>
  );
}

export function useActiveSectionContext() {
  const context = useContext(ActiveSectionContext);
  if (context === null) {
    throw new Error(
      "useActiveSectionContext must be used within an ActiveSectionContextProvider",
    );
  }
  return context;
}
