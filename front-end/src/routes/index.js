import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Register, Products, Admin } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/admin/manage" component={ Admin } />
    </Switch>
  );
}
export default Routes;
