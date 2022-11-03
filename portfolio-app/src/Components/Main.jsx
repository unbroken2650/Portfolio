import { React } from 'react';
import { css } from '@emotion/react';
import Landing from './Landing';
import Info from './Info';
import Projects from './Projects';
import Preload from './reusable/Preload';

function Main() {
  const containerStyle = css`
    display: block;
    height: 100vh;
  `;
  return (
    <main>
      <Landing css={containerStyle} />
      <Info css={containerStyle} />
      <Projects css={containerStyle} />
      <Preload />
    </main>
  );
}

export default Main;
