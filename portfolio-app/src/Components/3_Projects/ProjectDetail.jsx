import React from 'react';
import { css } from '@emotion/react';
import LinkImage from './LinkImage';
import projects from '../../data/projectsDetail.json';

function ProjectDetail({ selectedProject }) {
  const projectData = projects.projects[selectedProject];

  const container = css`
    width: 60%;
    margin: 0 3%;
    padding: 2em;

    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    word-break: keep-all;

    border-radius: 25px;
    box-shadow: 0px 4px 40px rgba(101, 101, 101, 0.25);

    @media screen and (max-width: 1025px) {
      margin: 1em 0;
      padding: 1em;

      align-items: center;
    }
    & > p {
      @media screen and (max-width: 1025px) {
        font-size: 15px;
      }
    }
  `;

  const imageStyle = css`
    height: 300px;
    object-fit: contain;
    @media screen and (max-width: 1025px) {
      height: 150px;
    }
  `;

  const titleContainer = css`
    width: 80%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    font-size: 25px;
    h3 {
      font-size: 30px;
    }
    @media screen and (max-width: 1025px) {
      justify-content: space-evenly;
      width: 100%;
      font-size: 12px;
    }
  `;

  const stackContainerStyle = css`
    width: 40%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    @media screen and (max-width: 1025px) {
      width: 40%;
    }
  `;

  const stackStyle = css`
    padding: 1% 2%;
    border: solid 3px rgba(101, 101, 101, 1);
    border-radius: 10px;
    @media screen and (max-width: 1025px) {
      font-size: 12px;
    }
  `;

  const briefDetailContainer = css`
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    text-align: center;
    @media screen and (max-width: 1025px) {
      flex-direction: column;

      p {
        text-align: center;
        font-size: 16px;
      }
    }
  `;

  const descDetailContainer = css`
    width: 100%;
    word-break: keep-all;
    @media screen and (max-width: 1025px) {
      p {
        text-align: center;
        font-size: 16px;
      }
    }
  `;

  return (
    <section css={container}>
      <img
        css={imageStyle}
        src={projectData.first_image}
        alt={projectData.name}
      ></img>
      <div css={titleContainer}>
        <h3>{projectData.name}</h3>
        <LinkImage link_image={projectData.links}></LinkImage>
        <p css={stackContainerStyle}>
          {projectData.stacks.map((s, index) => (
            <span css={stackStyle} key={index}>
              {s}
            </span>
          ))}
        </p>
      </div>
      <div css={briefDetailContainer}>
        <p>
          {projectData.people > 1
            ? `팀 프로젝트 (${projectData.people}명)`
            : '개인 프로젝트'}
        </p>
        <p>{projectData.time}</p>
        <p>{projectData.part}</p>
      </div>
      <div css={descDetailContainer}>
        <p>{projectData.description}</p>
      </div>
    </section>
  );
}

export default ProjectDetail;
