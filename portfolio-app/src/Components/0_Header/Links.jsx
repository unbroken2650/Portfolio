import React from 'react';
import { css } from '@emotion/react';
import colorData from '../../style/color.json';
import linkData from '../../data/headerLink.json';

function Links() {
  const container = css`
    margin: 0 10px;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
  `;

  const anchor = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0 8px;

    font-weight: 500;
    color: #373737;
    text-align: center;
    @media screen and (max-width: 1025px) {
      font-size: 15px;
    }
    &:hover {
      color: ${colorData.highlight};
    }
  `;

  return (
    <div id="links" css={container}>
      {linkData.links.map(d => (
        <a key={d.name} id={d.name} href={d.url} css={anchor}>
          {d.name}
        </a>
      ))}
    </div>
  );
}

export default Links;
