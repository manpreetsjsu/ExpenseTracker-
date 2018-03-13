//client/index.js
import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, browserHistory } from 'react-router';
import Routes from './routes';
import App from './components/App';

ReactDOM.render(
  <Router history={browserHistory}>
      <Route exact path={"/"} component={App}/>
  </Router>, document.getElementById('root')
);