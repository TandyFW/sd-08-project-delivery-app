import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Products from './pages/Products/Products';
import Checkout from './pages/Checkout/Checkout';
import Management from './pages/Management/Management';
import CustomerOrders from './pages/CustomerOrders/CustomerOrders';
import SellerOrders from './pages/SellerOrders/SellerOrders';
import OrderDetails from './pages/OrderDetails/OrderDetails';

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/admin/manage" component={ Management } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route exact path="/customer/orders" component={ CustomerOrders } />
      <Route exact path="/seller/orders" component={ SellerOrders } />
    </Switch>
  );
}
