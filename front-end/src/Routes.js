import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './views/Login/index';
import Components from './views/Components';
import Home from './views/Home';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/components" component={ Components } />
      </Switch>
    </Router>
  );
}

export default Routes;
