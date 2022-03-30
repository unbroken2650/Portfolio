import React from "react";

function ProjectList() {
  const data = ["포트폴리오", "사물함 예약", "ssulocker"];
  return (
    <div id="projects-lists">
      {data.map((l, index) => (
        <p key={index} id={index}>
          {l}
        </p>
      ))}
    </div>
  );
}

export default ProjectList;
