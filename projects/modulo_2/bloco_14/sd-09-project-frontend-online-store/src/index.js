// Mercado Libre closed its public API; see previewMock.js. Must run before anything fetches.
import './previewMock';
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root'),
);

