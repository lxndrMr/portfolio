"use client";

import About from "@/src/components/About";
import Intro from "@/src/components/Intro";
import Projects from "@/src/components/Projects";
import SectionDivider from "@/src/components/SectionDivider";

export default function Page() {
  return (
    <div className="flex flex-col items-center justify-center px-4">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
    </div>
  );
}
