import React from 'react';
import { css } from '@emotion/react';

function Title({ detail }) {
  const title = css`
    margin: 0.5em 0 1em;
    width: 100%;

    text-align: center;
    font-weight: 700;
    font-size: 65px;
    @media screen and (max-width: 1025px) {
      font-size: 20px;
    }
  `;
  return <h2 css={title}>{detail}</h2>;
}

export default Title;
