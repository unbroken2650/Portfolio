import React, { useState } from "react";
import ProjectDetail from "./3_Projects/ProjectDetail";
import ProjectList from "./3_Projects/ProjectList";
import Title from "./reusable/Title";
import "../scss/Projects.module.scss";

function Projects() {
 const [selectedProject, setSelectedProject] = useState(0);
 return (
  <div id="projects">
   <section id="projectsleft">
    <Title detail="What I Did" />
    <ProjectList selectProject={setSelectedProject} />
   </section>
   <ProjectDetail selectedProject={selectedProject} />
  </div>
 );
}

export default Projects;
