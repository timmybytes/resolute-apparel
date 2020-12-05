import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import App from './components/App';
import './scss/main.scss';

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter basename='/'>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
