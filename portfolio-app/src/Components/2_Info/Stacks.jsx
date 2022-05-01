import React from "react";
import { StackIcon } from "../../icons";

function Stacks() {
 const stacks = [
  "React(Javascript)",
  "Scss / emotion",
  "Vercel",
  "Github",
  "VS Code",
 ];
 return (
  <section className="info-detail" id="Stacks">
   <img
    src="https://www.duemarichapter.it/wp-content/uploads/2018/11/blog-ph-1.jpg"
    alt="sample"
   ></img>
   <article id="info-stacks">
    <h3>Stacks</h3>
    <div id="stacks-detail">
     {stacks.map((s, index) => (
      <div className="stacks-stack">
       <StackIcon />
       <p key={index}>{s}</p>
      </div>
     ))}
    </div>
   </article>
  </section>
 );
}

export default Stacks;
