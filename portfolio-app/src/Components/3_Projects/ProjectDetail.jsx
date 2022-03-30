import React from "react";
import LinkImage from "./LinkImage";
function ProjectDetail(ProjectData) {
  const { first_image, name, links, people, time, part, stacks, description } =
    ProjectData.data.projects[0];
  return (
    <section id="project-detail">
      <img src={first_image} className="image_preview" alt={name}></img>
      <div id="project-detail-title">
        <h3>{name}</h3>
        <LinkImage link_image={links}></LinkImage>
      </div>
      <div id="project-detail-brief">
        <p>
          팀 프로젝트({people}명) / {time}
        </p>
        <p>{part}</p>
        <p>
          {stacks.map((s, index) => (
            <span key={index}>{s}</span>
          ))}
        </p>
      </div>
      <div id="project-detail-desc">
        <p>{description}</p>
      </div>
    </section>
  );
}

export default ProjectDetail;
