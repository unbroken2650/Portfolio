import React from "react";

function Links() {
 const data = [
  { name: "Github", url: "https://www.github.com/unbroken2650" },
  { name: "Blog", url: "https://blog.naver.com/unbroken2650" },
  { name: "Instagram", url: "https://www.instagram.com/unbroken2650/" },
  { name: "Contact", url: "mailto:unbroken2650@gmail.com" },
 ];
 return (
  <div id="links">
   {data.map((d) => (
    <a key={d.name} id={d.name} href={d.url}>
     {d.name}
    </a>
   ))}
  </div>
 );
}

export default Links;
