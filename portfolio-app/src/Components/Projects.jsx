import React from "react";
import ProjectDetail from "./3_Projects/ProjectDetail";
import ProjectsLeft from "./3_Projects/ProjectsLeft";
import "../scss/Projects.module.scss";

function Projects() {
 return (
  <div id="projects">
   <ProjectsLeft />
   <ProjectDetail />
  </div>
 );
}

export default Projects;
