import React from "react";
import LinkImage from "./LinkImage";

function Project() {
 return (
  <div id="projects-detail">
   <img
    src="https://www.duemarichapter.it/wp-content/uploads/2018/11/blog-ph-1.jpg"
    alt="sample"
   ></img>
   <h3>포트폴리오</h3>
   <LinkImage></LinkImage>
   <p>팀 프로젝트(2명) / 2022.03 ~ 2022.06</p>
   <p>기획, 개발 / 디자이너 : _____xhxy</p>
   <p>React / Sass / Vercel</p>
   <p>
    React를 학습하면서 얻은 지식으로 실제 웹사이트를 만들고 싶었는데, 마침
    포트폴리오 사이트가 가장 나에게 필요한 것이라 생각했다.
   </p>
   <p>어떤 것에 중점을 두었고, 어떤 것이 어려웠다.</p>
  </div>
 );
}

export default Project;
