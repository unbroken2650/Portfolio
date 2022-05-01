import React from "react";
import LinkImage from "./LinkImage";
import projects from "../../data/projectsDetail.json";

function ProjectDetail({ selectedProject }) {
 const projectData = projects.projects[selectedProject];
 return (
  <section id="project-detail">
   <img
    src="https://www.duemarichapter.it/wp-content/uploads/2018/11/blog-ph-1.jpg"
    className="image_preview"
    alt={projectData.name}
   ></img>
   <div id="project-detail-title">
    <h3>{projectData.name}</h3>
    <LinkImage link_image={projectData.links}></LinkImage>
   </div>
   <div id="project-detail-brief">
    <p>
     팀 프로젝트({projectData.people}명) / {projectData.time}
    </p>
    <p>{projectData.part}</p>
    <p id="project-detail-stacks">
     {projectData.stacks.map((s, index) => (
      <span key={index}>{s}</span>
     ))}
    </p>
   </div>
   <div id="project-detail-desc">
    <p>{projectData.description}</p>
   </div>
  </section>
 );
}

export default ProjectDetail;
