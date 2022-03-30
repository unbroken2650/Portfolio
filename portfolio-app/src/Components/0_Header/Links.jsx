import React from "react";
import linkData from "../../data/headerLink.json";

function Links() {
  return (
    <div id="links">
      {linkData.links.map((d) => (
        <a key={d.name} id={d.name} href={d.url}>
          {d.name}
        </a>
      ))}
    </div>
  );
}

export default Links;
