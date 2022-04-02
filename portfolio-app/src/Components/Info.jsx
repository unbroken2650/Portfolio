import React from "react";
import "../scss/Info.module.scss";
import Career from "./2_Info/Career";
import Stacks from "./2_Info/Stacks";
import Advantages from "./2_Info/Advantages";
import Title from "./reusable/Title";

function Info() {
  return (
    <div id="info">
      <Title detail="Let Me Introduce Myself" />
      <div id="info-detail">
        <Career />
        <Stacks />
        <Advantages />
      </div>
    </div>
  );
}

export default Info;
