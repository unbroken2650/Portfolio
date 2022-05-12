import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './styles/_font.scss';

function App() {
  return (
    <>
      <React.StrictMode>
        <Header />
        <Main />
      </React.StrictMode>
    </>
  );
}

export default App;
