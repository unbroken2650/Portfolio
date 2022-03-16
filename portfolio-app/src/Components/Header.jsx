import React from "react";
import Title from "./0_Header/Title";
import Links from "./0_Header/Links";
import "../scss/Header.module.scss";

function Header() {
 return (
  <header>
   <Title />
   <Links />
  </header>
 );
}

export default Header;
