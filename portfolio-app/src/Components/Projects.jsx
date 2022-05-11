import React, { useState } from 'react';
import { css } from '@emotion/react';
import ProjectDetail from './3_Projects/ProjectDetail';
import ProjectList from './3_Projects/ProjectList';
import Title from './reusable/Title';

function Projects() {
  const [selectedProject, setSelectedProject] = useState(0);

  const container = css`
    height: 100vh;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1025px) {
      flex-direction: column;
    }
    & * {
      margin: 1% 0;
    }
  `;

  const leftContainer = css`
    margin: 0 1%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 1025px) {
      width: 100%;
    }
  `;

  return (
    <div css={container}>
      <section css={leftContainer}>
        <Title detail="What I Did" align="center" marginDefault={true} />
        <ProjectList selectProject={setSelectedProject} />
      </section>
      <ProjectDetail selectedProject={selectedProject} />
    </div>
  );
}

export default Projects;
