import React from 'react';
import { css } from '@emotion/react';

function ProjectList({ selectProject = f => f }) {
  const data = ['포트폴리오', '사물함 예약', 'armycalculator'];

  const container = css`
    width: 100%;
    text-align: center;
    @media screen and (max-width: 1025px) {
      width: 70%;
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      flex-wrap: wrap;
    }
  `;

  const listStyle = css`
    margin: 1em 0;
    padding: 1%;
    box-shadow: 4px 4px 10px rgba(101, 101, 101, 0.25);
    &:hover {
      background-color: rgba(101, 101, 101, 0.25);
    }
    @media screen and (max-width: 1025px) {
      margin: 0.1em 0.5em;
    }
  `;
  return (
    <div css={container}>
      {data.map((l, index) => (
        <p css={listStyle} key={index} onClick={() => selectProject(index)}>
          {l}
        </p>
      ))}
    </div>
  );
}

export default ProjectList;
