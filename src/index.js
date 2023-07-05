import React from 'react';
import ReactDOM from 'react-dom/client';
import './assets/style/main.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import store from './redux/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>,
);
