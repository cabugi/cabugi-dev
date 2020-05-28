import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';

import Routes from "./routes.js";

ReactDOM.render(
  <React.StrictMode>
    <Routes />
  </React.StrictMode>,
  document.getElementById('root')
);