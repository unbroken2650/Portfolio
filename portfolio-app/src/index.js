import React from 'react';
import { createRoot } from 'react-dom/client';

import GlobalStyle from './styles/Reset';
import App from './App';

const root = createRoot(document.getElementById('react-container'));
root.render(
  <>
    <GlobalStyle />
    <App />
  </>,
);
