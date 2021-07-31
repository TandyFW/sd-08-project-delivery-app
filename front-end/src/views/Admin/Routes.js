import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import AdminManage from './Manage';

function Routes() {
  return (
    <Router>
      <Switch>
        {/* Rotas do admin */}
        <Route path="/admin/manage" component={ AdminManage } />
      </Switch>
    </Router>
  );
}

export default Routes;
