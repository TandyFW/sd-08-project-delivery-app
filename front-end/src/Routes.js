import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import CartContextProvider from './components/CartContextProvider';

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={ Register } />
      <CartContextProvider>
        <Route path="/customer/products">
          <CustomerProducts />
        </Route>
        <Route path="/customer/checkout">
          <CustomerCheckout />
        </Route>
      </CartContextProvider>
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
