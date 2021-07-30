import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  AdminManage,
  Login,
  OrderDetails,
  Register,
  Products,
  Checkout,
  Orders } from './pages';

const Routes = () => (
  <Switch>
    <Route path="/login" component={ Login } />
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route path="/admin/manage" component={ AdminManage } />
    <Route path="/register" component={ Register } />
    <Route path="/customer/products" component={ Products } />
    <Route path="/customer/checkout" component={ Checkout } />
    <Route path="/admin/manage" component={ AdminManage } />
    <Route exact path="/seller/orders">
      <Orders title="seller" />
    </Route>
    <Route exact path="/customer/orders">
      <Orders title="customer" />
    </Route>
    <Route path="/seller/orders/:id">
      <OrderDetails userType="seller" />
    </Route>
    <Route path="/customer/orders/:id">
      <OrderDetails userType="customer" />
    </Route>
  </Switch>
);

export default Routes;
