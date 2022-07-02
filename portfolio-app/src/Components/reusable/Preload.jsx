import React from 'react';
import { css } from '@emotion/react';
import projects from '../../data/projectsDetail.json';

export default function Preload() {
  const images = projects.projects;
  const preload = css`
    display: none;
  `;
  return (
    <>
      {images.map((i, index) => (
        <img css={preload} key={index} alt={index} src={i.first_image}></img>
      ))}
    </>
  );
}
