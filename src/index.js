import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import './scss/main.scss';

ReactDOM.render(
  <BrowserRouter basename='/'>
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
