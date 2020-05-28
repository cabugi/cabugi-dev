import React from 'react';
import ReactDOM from 'react-dom';
import './global.css';
import RegForm from './pages/register'
ReactDOM.render(
  <React.StrictMode>
    <RegForm />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
