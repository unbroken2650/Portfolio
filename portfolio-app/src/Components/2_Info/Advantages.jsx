import React from 'react';
import { css } from '@emotion/react';
import { ThumbsUpIcon } from '../../styles/icons';

function Advantages() {
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
    margin: 5px 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    h4,
    p {
      margin: 0;
      font-size: 15px;
      @media screen and (max-width: 1025px) {
        font-size: 12px;
        margin: 0;
      }
    }
    svg {
      @media screen and (max-width: 1025px) {
        display: none;
      }
    }
  `;
  const advantages = [
    {
      name: '책임감',
      desc: '주어진 업무에 최선을 다하는 성격을 가지고 있습니다.',
    },
    {
      name: '포용력',
      desc: '타인의 의견을 수렴하고 존중하는 자세를 갖추고 있습니다.',
    },
    { name: '집중력', desc: '한번 시작하면 끝까지 몰입합니다.' },
  ];
  return (
    <section className="info-detail" css={section}>
      <img
        src={require('../../images/strength_icon.png')}
        alt="sample"
        css={image}
      ></img>
      <article css={article}>
        <h3 css={subtitle}>Advantages</h3>
        {advantages.map((a, index) => (
          <div key={index} className="advantages-adv" css={detail}>
            <h4>{a.name}</h4>
            <p>
              <ThumbsUpIcon />
              {a.desc}
            </p>
          </div>
        ))}
      </article>
    </section>
  );
}

export default Advantages;
