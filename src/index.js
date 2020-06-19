import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Hello from './Hello';

ReactDOM.render(
  // <App name="Mubashir Aslam" age={22} ></App>,
  <Hello name="Ijaz Serwer" age="23" ></Hello>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
