import React from "react";
import { ProjectCard } from "../project-cards";
import { RESUME } from "@/lib/resume";

export default function ProjectsList() {
  return (
    <div className="grid sm:grid-cols-3 grid-cols-1 gap-4 sm:px-6">
      {RESUME.projects.map((project, index) => (
        <ProjectCard
          href={project.link[0].href}
          key={index}
          title={project.title}
          description={project.description}
          dates={""}
          tags={project.techStack}
          image={""}
          video={project.video_src}
          links={project.link}
        />
      ))}
    </div>
  );
}
