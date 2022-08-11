import React from 'react';
import { css } from '@emotion/react';
import LandingLeft from './1_Landing/LandingLeft';
import LandingRight from './1_Landing/LandingRight';

function Landing() {
  const container = css`
    height: 100vh;
    width: 100%;
    background: rgb(87, 87, 87);
    background: linear-gradient(
      90deg,
      rgba(87, 87, 87, 1) 0%,
      rgba(155, 155, 155, 1) 33%,
      rgba(255, 255, 255, 1) 100%
    );
  `;
  return (
    <div id="landing" css={container}>
      <LandingLeft />
      <LandingRight />
    </div>
  );
}

export default Landing;
