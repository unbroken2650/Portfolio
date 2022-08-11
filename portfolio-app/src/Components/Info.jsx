import React from 'react';
import { css } from '@emotion/react';
import Career from './2_Info/Career';
import Stacks from './2_Info/Stacks';
import Advantages from './2_Info/Advantages';
import Title from './reusable/Title';

function Info() {
  const container = css`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1025px) {
      flex-direction: column;
    }
  `;

  const insideContainer = css`
    display: flex;
    flex-direction: row;
    justify-content: center;
    height: 80%;
    width: 100%;
    @media screen and (max-width: 1025px) {
      flex-direction: column;
      justify-content: space-evenly;
      align-items: center;
    }
  `;
  return (
    <div css={container}>
      <Title
        detail="Let Me Introduce Myself"
        align="center"
        marginDefault={true}
      />
      <div css={insideContainer}>
        <Career />
        <Stacks />
        <Advantages />
      </div>
    </div>
  );
}

export default Info;
