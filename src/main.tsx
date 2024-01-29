import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './style.scss';
import ErrorBoundary from './utils/ErrorBoundary';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
