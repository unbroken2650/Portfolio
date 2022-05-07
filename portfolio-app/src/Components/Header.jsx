import React from 'react';
import { css } from '@emotion/react';
import Links from './0_Header/Links';
import color from '../style/color.json';

function Header() {
  const container = css`
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    position: fixed;
    top: 0px;
    height: 64px;
    width: 100%;
    z-index: 999;

    background-color: ${color.white};
    header & {
      font-size: 20px;
      font-style: normal;
      line-height: 30px;
      letter-spacing: 0em;
      text-align: center;
      min-height: 64px;
    }
  `;

  const title = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 10px;
    font-weight: 700;

    transition: color 1s;
    @media screen and (max-width: 1025px) {
      font-size: 15px;
    }
    &:hover {
      color: ${color.highlight};
      transition: color 1s;
    }
  `;

  return (
    <header css={container}>
      <h1 css={title}>SUHO HAN</h1>
      <Links />
    </header>
  );
}

export default Header;
