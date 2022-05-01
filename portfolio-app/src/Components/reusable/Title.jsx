import React from "react";

function Title({ detail }) {
 return <h2 key={detail[0]}>{detail}</h2>;
}

export default Title;
