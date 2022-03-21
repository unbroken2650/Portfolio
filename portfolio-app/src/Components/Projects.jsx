import React from "react";
import Project from "./3_Projects/Project";
import ProjectsLeft from "./3_Projects/ProjectsLeft";
import "../scss/Projects.module.scss";

function Projects() {
 return (
  <div id="projects">
   <ProjectsLeft />
   <Project />
  </div>
 );
}

export default Projects;
