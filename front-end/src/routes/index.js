import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Register, Products, Admin, Checkout, SellerOrders, CustomerOrders, CustomerOrdersDetails } from '../pages';

function Routes() {
  return (
    <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/admin/manage" component={ Admin } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
        <Route exact path="/customer/orders" component={ CustomerOrders } />
        <Route exact path="/customer/orders/:id" component={ CustomerOrdersDetails } />

    </Switch>
  );
}
export default Routes;
