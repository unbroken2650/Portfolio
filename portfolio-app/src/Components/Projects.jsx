import React from "react";
import ProjectDetail from "./3_Projects/ProjectDetail";
import ProjectsLeft from "./3_Projects/ProjectsLeft";
import "../scss/Projects.module.scss";
import ProjectData from "../data/projectsDetail.json";

function Projects() {
  return (
    <div id="projects">
      <ProjectsLeft />
      <ProjectDetail data={ProjectData} />
    </div>
  );
}

export default Projects;
