import React from 'react';
import { css } from '@emotion/react';
import Title from '../reusable/Title';

function LandingLeft() {
  const section = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;
    * {
      margin: 0;
    }
    position: absolute;
    width: 480px;
    left: 10%;
    top: 40%;

    text-align: left;
  `;
  const subtitle = css`
    font-size: 30px;
    @media screen and (max-width: 1025px) {
      font-size: 15px;
    }
  `;
  const detail = css`
    @media screen and (max-width: 1025px) {
      font-size: 12px;
    }
  `;
  return (
    <section id="landingleft" css={section}>
      <Title detail="PORTFOLIO" align="left" margin={false} />
      <h3 css={subtitle}>Front-End Developer</h3>
      <p css={detail}></p>
    </section>
  );
}

export default LandingLeft;
