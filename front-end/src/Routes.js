import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './views/Login/index';
import Components from './views/Components';
import Home from './views/Home';
import Register from './views/Register';
import CustomerRouts from './views/Customer/Routes';
import SellerOrders from './views/Seller';

function Routes() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/components" component={ Components } />
        <Route path="/register" component={ Register } />
        <Route path="/customer" component={ CustomerRouts } />
        <Route path="/seller/orders" component={ SellerOrders } />
        <Route path="/seller/orders/:id" component={ SellerOrders } />
      </Switch>
    </Router>
  );
}

export default Routes;
