"use client";

import React from "react";
import SectionHeading from "./section-title";
import { projectsData } from "@/lib/data";
import Project from "./project";
import { useSectionInView } from "@/lib/hooks";

export default function Projects() {
  //   const { ref } = useSectionInView("Projects", 0.5);
  const projectsRef = useSectionInView("Projects", 0.5);
  return (
    <section ref={projectsRef.ref} id="projects" className="scroll-mt-28 mb-28">
      <SectionHeading>My projects</SectionHeading>
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
