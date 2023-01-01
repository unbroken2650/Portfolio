import React from 'react';
import { css } from '@emotion/react';
import LandingLeft from './1_Landing/LandingLeft';
import LandingRight from './1_Landing/LandingRight';

function Landing() {
  const container = css`
    height: 100vh;
    width: 100%;
  `;

  const imageStyle = css`
    position: absolute;
    max-height: 100vh;
    min-width: 100%;
    object-fit: scale-down;
    @media screen and (max-width: 1025px) {
      right: -50px;
    }
  `;

  return (
    <div id="landing" css={container}>
      <img
        css={imageStyle}
        src="https://i.imgur.com/iUzrfiY.png"
        alt="배경이미지"
      ></img>
      <LandingLeft />
      <LandingRight />
    </div>
  );
}

export default Landing;
