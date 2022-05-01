import React from "react";
import { ThumbsUpIcon } from "../../icons";
function Advantages() {
 const advantages = [
  {
   name: "책임감",
   desc: "주어진 업무에 최선을 다하는 성격을 가지고 있습니다.",
  },
  {
   name: "포용력",
   desc: "타인의 의견을 수렴하고 존중하는 자세를 갖추고 있습니다.",
  },
  { name: "집중력", desc: "한번 시작하면 끝까지 몰입합니다." },
 ];
 return (
  <section className="info-detail" id="Advantages">
   <img
    src="https://www.duemarichapter.it/wp-content/uploads/2018/11/blog-ph-1.jpg"
    alt="sample"
   ></img>
   <article id="info-advantages">
    <h3>Advantages</h3>
    {advantages.map((a, index) => (
     <div key={index} className="advantages-adv">
      <h4>{a.name}</h4>
      <p>
       <ThumbsUpIcon />
       {a.desc}
      </p>
     </div>
    ))}
   </article>
  </section>
 );
}

export default Advantages;
