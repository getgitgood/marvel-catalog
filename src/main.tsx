import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.scss';
import GlobalStyle, { theme } from './GlobalStyle';
import { ThemeProvider } from 'styled-components';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle />
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
