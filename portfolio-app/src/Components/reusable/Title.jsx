import React from 'react';
import { css } from '@emotion/react';

function Title({ detail, align, marginDefault }) {
  let textAlign = css``;
  let textMargin = css`
    margin: 0;
  `;
  if (align) {
    textAlign = css`
      text-align: ${align};
    `;
  }

  if (marginDefault) {
    textMargin = css`
      margin: 0.5em 0 1em;
    `;
  }

  const title = css`
    margin: 0.5em 0 1em;
    width: 100%;

    font-weight: 700;
    font-size: 65px;
    @media screen and (max-width: 1025px) {
      margin: 0.1em 0 0.2em;
      font-size: 30px;
    }
  `;
  return <h2 css={[title, textAlign, textMargin]}>{detail}</h2>;
}

export default Title;
