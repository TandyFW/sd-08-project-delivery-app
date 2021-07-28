import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import {
  AdminManage,
  Login,
  SalesBySeller,
  SaleDetail,
  Register,
  Products } from './pages';

const Routes = () => (
  <Switch>
    <Route path="/login" component={ Login } />
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route path="/admin/manage" component={ AdminManage } />
    <Route exact path="/seller/orders" component={ SalesBySeller } />
    <Route path="/seller/orders/:id" component={ SaleDetail } />
    <Route path="/register" component={ Register } />
    <Route path="/customer/products" component={ Products } />
  </Switch>
);

export default Routes;
