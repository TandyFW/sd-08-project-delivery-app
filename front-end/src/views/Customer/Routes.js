import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CustomerProducts from './Products';
import CustomerCheckout from './Checkout/index';
import OrderDetails from './OrderDetails';
import Orders from './Orders/index';

function Routes() {
  return (
    <Router>
      <Switch>
        {/* Rotas do cliente */}
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
        <Route path="/customer/orders/:id" component={ OrderDetails } />
        <Route path="/customer/orders" component={ Orders } />
      </Switch>
    </Router>
  );
}

export default Routes;
