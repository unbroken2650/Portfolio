import React from "react";
import "../scss/Info.module.scss";
import Career from "./2_Info/Career";
import Stacks from "./2_Info/Stacks";
import Advantages from "./2_Info/Advantages";

function Info() {
 return (
  <div id="info">
   <h2>Let Me Introduce Myself</h2>
   <div id="info-detail">
    <Career />
    <Stacks />
    <Advantages />
   </div>
  </div>
 );
}

export default Info;
