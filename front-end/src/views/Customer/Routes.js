import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CustomerProducts from './Products';
import CustomerCheckout from '../CustomerCheckout/index';

function Routes() {
  return (
    <Router>
      <Switch>
        {/* Rotas do cliente */}
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
      </Switch>
    </Router>
  );
}

export default Routes;
