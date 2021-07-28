import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import CustomerProducts from './Products';

function Routes() {
  return (
    <Router>
      <Switch>
        {/* Rotas do cliente */}
        <Route path="/customer/products" component={ CustomerProducts } />
      </Switch>
    </Router>
  );
}

export default Routes;
