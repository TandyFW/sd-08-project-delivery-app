import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './Pages/Login';
import Orders from './Pages/Orders';
import CustomerCheckout from './Pages/CustomerCheckout';
import CustomerProducts from './Pages/CustomerProducts';
import OrdersDetails from './Pages/OrdersDetails';
import Register from './Pages/Register';
// import SellerOrders from './Pages/SellerOrders';

export default () => (
  <Switch>
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route exact path="/login">
      <Login />
    </Route>
    <Route exact path="/register">
      <Register />
    </Route>
    <Route exact path="/customer/products">
      <CustomerProducts />
    </Route>
    <Route exact path="/customer/checkout">
      <CustomerCheckout />
    </Route>
    <Route exact path="/customer/orders">
      <Orders userRole="customer" />
    </Route>
    <Route
      exact
      path="/customer/orders/:id"
      component={ OrdersDetails }
    />
    <Route exact path="/seller/orders">
      <Orders userRole="seller" />
    </Route>
    {/*  <exact Route path="/seller/orders/:id" >
      <SellerOrdersDetails />
    </Route> */}
    {/*   <exact Route path="/admin/manage" >
      <Admin />
    </Route> */}
  </Switch>
);
