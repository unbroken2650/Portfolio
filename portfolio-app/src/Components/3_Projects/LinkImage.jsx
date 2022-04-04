import React from "react";

function LinkImage(links) {
  return (
    <div id="LinkImage">
      {links.link_image.map(({ name, url, src }) => (
        <a key={name} id={name} href={url}>
          <img src={src} className="image_link" alt={`link to ${name}`}></img>
        </a>
      ))}
    </div>
  );
}

export default LinkImage;
