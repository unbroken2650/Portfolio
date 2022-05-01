import React from "react";

function ProjectList({ selectProject = (f) => f }) {
 const data = ["포트폴리오", "사물함 예약", "armycalculator"];
 return (
  <div id="projects-lists">
   {data.map((l, index) => (
    <p key={index} id={index} onClick={() => selectProject(index)}>
     {l}
    </p>
   ))}
  </div>
 );
}

export default ProjectList;
