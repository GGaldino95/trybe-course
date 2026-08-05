// Preview failsafe: falls back to a captured snapshot if the API is down. Must run first.
import './previewFallback';
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import './index.css';
import App from './App';
import store from './store/index';

ReactDOM.render(
  <BrowserRouter basename={import.meta.env.BASE_URL}>
    <Provider store={ store }>
      <App />
    </Provider>
  </BrowserRouter>,
  document.getElementById('root'),
);

