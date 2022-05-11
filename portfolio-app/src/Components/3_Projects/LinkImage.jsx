import React from 'react';
import { css } from '@emotion/react';

function LinkImage(links) {
  const container = css`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  `;

  const linkStyle = css`
    margin: 0 1%;
    width: min-content;
  `;

  const imageStyle = css`
    width: 50px;
    @media screen and (max-width: 1025px) {
      width: 25px;
    }
  `;
  return (
    <div css={container}>
      {links.link_image.map(({ name, url, src }) => (
        <a css={linkStyle} key={name} href={url}>
          <img css={imageStyle} src={src} alt={`link to ${name}`}></img>
        </a>
      ))}
    </div>
  );
}

export default LinkImage;
