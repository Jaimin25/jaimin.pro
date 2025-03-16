import ProjectsList from "@/components/Projects";
import { Metadata } from "next";
import React from "react";

export const metadata: Metadata = {
  title: "Projects",
  description: "Highlighting my extraordinary projects",
};

export default function ProjectsPage() {
  return (
    <main className="max-w-5xl m-6 pb-6">
      <ProjectsList />
    </main>
  );
}
