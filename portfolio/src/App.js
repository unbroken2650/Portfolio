import React from 'react';
import Header from './Components/Header';
import Main from './Components/Main';
import './Main.scss';

function App() {
  return (
    // eslint-disable-next-line react/jsx-filename-extension
    <React.StrictMode>
      <Header />
      <Main />
    </React.StrictMode>
  );
}

export default App;
