import React from 'react';
import { css } from '@emotion/react';
import { StackIcon } from '../../styles/icons';

function Stacks() {
  const section = css`
    width: 25%;
    height: 70vh;
    border-radius: 25px;
    box-shadow: 0px 4px 40px rgba(101, 101, 101, 0.25);

    margin: 0 1em;

    @media screen and (max-width: 1025px) {
      width: 80%;
      height: min-content;

      display: flex;
      flex-direction: row;
      justify-content: center;
    }
  `;

  const image = css`
    width: 100%;
    height: 40%;
    object-fit: scale-down;
    border-radius: 25px 25px 0 0;
    @media screen and (max-width: 1025px) {
      width: 30%;
      height: 50%;
      margin: 1em 0 0;
      border-radius: 25px 0 0 0;
    }
  `;

  const article = css`
    padding: 0 30px;
    @media screen and (max-width: 1025px) {
      width: 70%;
      height: min-content;
      padding: 5px 10px;
    }
  `;
  const subtitle = css`
    font-size: 30px;
    color: $subtitle;
    line-height: 45px;
    margin: 20px 0;
    @media screen and (max-width: 1025px) {
      font-size: 15px;
      line-height: 25px;
      margin: 10px 0;
    }
  `;
  const detail = css`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    span {
      margin: 0;
      @media screen and (max-width: 1025px) {
        font-size: 12px;
      }
    }
  `;

  const spanStyle = css`
    display: flex;
    flex-direction: row;
    align-items: center;
  `;

  const stacks = [
    'React(Javascript)',
    'Scss / emotion',
    'Vercel',
    'Github',
    'VS Code',
  ];
  return (
    <section className="info-detail" css={section}>
      <img
        src={require('../../images/tech_icon.png')}
        alt="sample"
        css={image}
      ></img>
      <article css={article}>
        <h3 css={subtitle}>Stacks</h3>
        <div css={detail}>
          {stacks.map((s, index) => (
            <div key={index} className="stacks-stack">
              <span css={spanStyle} key={index}>
                <StackIcon />
                {s}
              </span>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
}

export default Stacks;
