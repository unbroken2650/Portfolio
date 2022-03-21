import React from "react";
import Project from "./3_Projects/Project";
import ProjectList from "./3_Projects/ProjectList";
import "../scss/Projects.module.scss";

function Projects() {
 return (
  <div id="projects">
   <h2>What I Did</h2>
   <ProjectList />
   <Project />
  </div>
 );
}

export default Projects;
