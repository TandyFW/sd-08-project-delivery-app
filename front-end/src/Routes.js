import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Register from './pages/Register';
import Login from './pages/Login';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import CustomerOrders from './pages/CustomerOrders';
import CartContextProvider from './components/CartContextProvider';
import OrderContextProvider from './components/OrderContextProvider';
import CustomerOrderDetails from './pages/CustomerOrderDetails';

function Routes() {
  return (
    <Switch>
      <Route path="/register" component={ Register } />
      <Route path="/customer/orders">
        <OrderContextProvider>
          <CustomerOrders />
        </OrderContextProvider>
      </Route>
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
