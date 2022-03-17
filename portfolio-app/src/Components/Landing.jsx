import React from "react";
import Left from "./1_Landing/Left";
import Right from "./1_Landing/Right";
import "../scss/Landing.module.scss";

function Landing() {
 return (
  <div id="landing">
   <Left />
   <Right />
  </div>
 );
}

export default Landing;