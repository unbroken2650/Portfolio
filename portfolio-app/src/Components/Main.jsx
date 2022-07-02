import { React } from 'react';
import Landing from './Landing';
import Info from './Info';
import Projects from './Projects';
import Preload from './reusable/Preload';

function Main() {
  return (
    <main>
      <Landing />
      <Info />
      <Projects />
      <Preload />
    </main>
  );
}

export default Main;
