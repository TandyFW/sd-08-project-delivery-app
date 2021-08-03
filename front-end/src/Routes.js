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
      <Route path="/customer/orders/:id" component={ CustomerOrderDetails } />
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
