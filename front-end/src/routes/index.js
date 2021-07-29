import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';

import Login from '../pages/Login';
import Register from '../pages/Register';
import Products from '../pages/Products';
import Checkout from '../pages/Checkout';

const Routes = () => (
  <BrowserRouter>
    <Switch>
      <Route path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Route path="/customer/products" component={ Products } />
      <Route path="/customer/checkout" component={ Checkout } />
      <Route exact path="/" render={ (props) => <Redirect { ...props } to="login" /> } />
    </Switch>
  </BrowserRouter>
);

export default Routes;
