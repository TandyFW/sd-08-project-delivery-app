import { Redirect, Route, Switch } from 'react-router-dom';
import React from 'react';
import Login from './Pages/Login';
import CustomerOrders from './Pages/CustomerOrders';
import CustomerCheckout from './Pages/CustomerCheckout';
import CustomerProducts from './Pages/CustomerProducts';
import CustomerOrdersDetails from './Pages/CustomerOrdersDetails';
import Register from './Pages/Register';
import SellerOrders from './Pages/SellerOrders';
import SellerOrdersDetails from './Pages/SellerOrdersDetails';

export default () => (
  <Switch>
    <Route path="/" exact>
      <Redirect to="/login" />
    </Route>
    <Route path="/login" exact>
      <Login />
    </Route>
    <Route path="/register" exact>
      <Register />
    </Route>
    <Route path="/customer/products" exact>
      <CustomerProducts />
    </Route>
    <Route path="/customer/checkout" exact>
      <CustomerCheckout />
    </Route>
    <Route path="/customer/orders" exact>
      <CustomerOrders />
    </Route>
    <Route path="/customer/orders/:id" exact>
      <CustomerOrdersDetails />
    </Route>
    <Route path="/seller/orders" exact>
      <SellerOrders />
    </Route>
    <Route path="/seller/orders/:id" exact>
      <SellerOrdersDetails />
    </Route>
    {/*   <Route path="/admin/manage" exact>
      <Admin />
    </Route> */}
  </Switch>
);
