import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ClientProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/" component={ Login }>
          {window.location.pathname === '/' ? <Redirect to="/login" /> : ''}
        </Route>
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/customer/products" component={ ClientProducts } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
