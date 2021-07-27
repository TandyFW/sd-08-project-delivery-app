import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';
import Login from './pages/Login';

function Routes() {
  return (
    <Switch>
      <Route path="/login"><Login /></Route>
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ CustomerProducts } />
      <Route path="/"><Redirect to="/login" /></Route>
    </Switch>
  );
}

export default Routes;
