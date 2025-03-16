import { ProjectCard } from "@/components/project-cards";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { RESUME } from "@/lib/resume";
import Link from "next/link";
import React from "react";

export default function Projects({ className }: React.ComponentProps<"div">) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>Projects</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid sm:grid-cols-2 grid-cols-1 gap-4">
          {RESUME.projects.slice(0, 2).map((project, index) => (
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
        <div className="w-full text-center mt-2">
          <Link href="/projects">
            <Button variant={"outline"} className="cursor-pointer">
              Explore More
            </Button>
          </Link>
        </div>
      </CardContent>
    </Card>
  );
}
