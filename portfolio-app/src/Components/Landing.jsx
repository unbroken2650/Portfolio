import React from "react";
import LandingLeft from "./1_Landing/LandingLeft";
import LandingRight from "./1_Landing/LandingRight";
import "../scss/Landing.module.scss";

function Landing() {
 return (
  <div id="landing">
   <LandingLeft />
   <LandingRight />
  </div>
 );
}

export default Landing;
