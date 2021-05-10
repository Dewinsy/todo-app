import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

//To make sure the app is hoted on github pages without returning a 404 error!
import {HashRouter as Router} from 'react-router-dom';

ReactDOM.render(
  <Router>
    <App />
  </Router>
  , document.getElementById('root')
);


