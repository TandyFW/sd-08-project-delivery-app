import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PrivateRoute from './PrivateRouter';
import {
  Login,
  Register,
  Products,
  Orders,
  Checkout,
  OrdersDetails,
  Admin,
} from '../pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <PrivateRoute
        exact
        path="/customer/products"
        component={ Products }
      />
      <PrivateRoute exact path="/customer/orders" component={ Orders } />
      <PrivateRoute exact path="/customer/orders/:id" component={ OrdersDetails } />
      <PrivateRoute exact path="/customer/checkout" component={ Checkout } />
      <PrivateRoute exact path="/seller/orders" component={ Orders } />
      <PrivateRoute exact path="/seller/orders/:id" component={ OrdersDetails } />
      <PrivateRoute exact path="/admin/manage" component={ Admin } />
    </Switch>
  );
}

export default Routes;
