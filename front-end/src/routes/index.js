import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/common/Login';
import Register from '../pages/common/Register';
import Products from '../pages/customer/Products';
import Checkout from '../pages/customer/Checkout';
import Orders from '../pages/customer/Orders';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route path="/customer/orders/:id" component={ Orders } />
      <Route exact path="/" render={ (props) => <Redirect { ...props } to="login" /> } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
