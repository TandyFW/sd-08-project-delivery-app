import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  AdminManage,
  Login,
  SaleDetail,
  Register,
  Products,
  Orders } from './pages';

const Routes = () => (
  <Switch>
    <Route path="/login" component={ Login } />
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route path="/admin/manage" component={ AdminManage } />
    {/* <Route exact path="/seller/orders" component={ SalesBySeller } /> */}

    <Route exact path="/seller/orders">
      <Orders title="seller" />
    </Route>

    {/* <Route exact path="/customer/orders" component={ SalesBySeller } /> */}

    <Route exact path="/customer/orders">
      <Orders title="customer" />
    </Route>

    <Route path="/seller/orders/:id" component={ SaleDetail } />
    <Route path="/register" component={ Register } />
    <Route path="/customer/products" component={ Products } />
  </Switch>
);

export default Routes;
