import React from "react";

function LinkImage() {
 const data = [
  {
   name: "Github",
   url: "https://www.github.com/unbroken2650",
   src: "https://www.duemarichapter.it/wp-content/uploads/2018/11/blog-ph-1.jpg",
  },
  {
   name: "Blog",
   url: "https://blog.naver.com/unbroken2650",
   src: "https://www.duemarichapter.it/wp-content/uploads/2018/11/blog-ph-1.jpg",
  },
  {
   name: "Instagram",
   url: "https://www.instagram.com/unbroken2650",
   src: "https://www.duemarichapter.it/wp-content/uploads/2018/11/blog-ph-1.jpg",
  },
  {
   name: "Contact",
   url: "mailto:unbroken2650@gmail.com",
   src: "https://www.duemarichapter.it/wp-content/uploads/2018/11/blog-ph-1.jpg",
  },
 ];
 return (
  <div id="LinkImage">
   {data.map(({ name, url, src }) => (
    <a key={name} id={name} href={url}>
     <img src={src} className="image_link" alt={`link to ${name}`}></img>
    </a>
   ))}
  </div>
 );
}

export default LinkImage;
