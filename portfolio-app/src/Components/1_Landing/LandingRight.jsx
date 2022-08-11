import React from 'react';
import { css } from '@emotion/react';
import Title from '../reusable/Title';

function LandingRight() {
  const section = css`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 0;

    position: absolute;
    width: 350px;
    right: 10%;
    bottom: 10%;

    text-align: right;
    * {
      margin: 0;
    }
  `;
  const detail = css`
    @media screen and (max-width: 1025px) {
      font-size: 12px;
    }
  `;
  const detailData = [
    '숭실대학교 전자정보공학부 IT융합전공',
    'GPA ?.?/4/5',
    'ENTJ',
    '가나다라',
  ];
  return (
    <section id="landingright" css={section}>
      <Title detail="한수호" align="right" />
      {detailData.map((d, index) => (
        <p key={index} css={detail}>
          {d}
        </p>
      ))}
    </section>
  );
}

export default LandingRight;
