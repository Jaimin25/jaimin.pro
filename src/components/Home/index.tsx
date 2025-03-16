import React from "react";
import AboutMe from "./Sections/about-me";
import GithubTimeline from "./Sections/github-timeline";
import ToolsAndTech from "./Sections/tool-tech";
import Projects from "./Sections/projects";
import Blogs from "./Sections/blogs";

export default function HomeLayout() {
  return (
    <div className="grid lg:grid-cols-3 grid-cols-1 gap-2 pb-6">
      <AboutMe className="lg:col-span-1" />
      <GithubTimeline className="lg:col-span-2" />
      <Projects className="lg:col-span-2 lg:row-span-2" />
      <ToolsAndTech className="lg:col-span-1" />
      <Blogs className="lg:col-span-1 " />
    </div>
  );
}
