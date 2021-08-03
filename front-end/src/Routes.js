import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import CartContextProvider from './components/CartContextProvider';
import CustomerOrderDetails from './pages/CustomerOrderDetails';
import SellerProduct from './pages/SellerProduct';
import SellerOrderById from './pages/SellerOrderById';

function Routes() {
  return (
    <Switch>
      <Route path="/seller/orders/:id">
        <SellerOrderById />
      </Route>
      <Route path="/seller/orders" component={ SellerProduct } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products">
        <CartContextProvider>
          <CustomerProducts />
        </CartContextProvider>
      </Route>
      <Route path="/customer/checkout">
        <CartContextProvider>
          <CustomerCheckout />
        </CartContextProvider>
      </Route>
      <Route path="/customer/orders/:id">
        <CartContextProvider>
          <CustomerOrderDetails />
        </CartContextProvider>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
    </Switch>
  );
}

export default Routes;
