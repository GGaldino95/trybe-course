// Preview failsafe: falls back to a captured snapshot if the API is down. Must run first.
import './previewFallback';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
