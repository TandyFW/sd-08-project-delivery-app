import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import Register from './pages/Register';
import CustomerProducts from './pages/CustomerProducts';

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ CustomerProducts } />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
