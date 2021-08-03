import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/common/Login';
import Register from '../pages/common/Register';
import Products from '../pages/customer/Products';
import Checkout from '../pages/customer/Checkout';
import CustomerOrderDetails from '../pages/customer/CustomerOrderDetails';
import CustomerOrders from '../pages/customer/CustomerOrders';
import SellerOrders from '../pages/seller/SellerOrders';
import SellerOrderDetails from '../pages/seller/SellerOrderDetails';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/customer/orders/:id" component={ CustomerOrderDetails } />
      <Route path="/customer/orders" component={ CustomerOrders } />
      <Route path="/seller/orders/:id" component={ SellerOrderDetails } />
      <Route path="/seller/orders" component={ SellerOrders } />
      <Route exact path="/" render={ (props) => <Redirect { ...props } to="login" /> } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
