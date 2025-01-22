import React from "react";
import { projectsData } from "../lib/data";
import { useSectionInView } from "../lib/hooks";
import Project from "./Project";
import SectionHeading from "./SectionHeading";

export default function Projects() {
  const { ref } = useSectionInView("Projets", 0.5);
  return (
    <section ref={ref} id="projects" className="scroll-mt-28 mb-28 relative">
      <SectionHeading>Mes Projets</SectionHeading>
      <div>
        {projectsData.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
