import { Global, css } from '@emotion/react';

const reset = css`
  /* reset */

  body {
    margin: 0;
    cursor: default;
    * {
      margin: 0;
    }
  }

  a,
  a:hover,
  a:active {
    text-decoration: none;
    outline: none;
    cursor: pointer;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin: 0;
  }

  h4,
  p {
    font-size: 20px;
  }

  /* global */
  body {
    margin: 0;
    max-width: 100%;
    overflow-x: hidden;
    touch-action: pan-y;
  }
  ::-webkit-scrollbar {
    display: none;
  }

  div#react-container {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
  }

  main {
    width: 100%;
  }
`;

const GlobalStyle = () => {
  return <Global styles={reset} />;
};

export default GlobalStyle;
