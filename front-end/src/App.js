import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import ClientProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import Register from './pages/Register';
import Seller from './pages/Seller';
import Orders from './pages/Orders';
import Checkout from './pages/Checkout';
import SellerDetails from './pages/SellerDetails';
import AdminManager from './pages/AdminManager';
import CustomerDetails from './pages/CustomerDetails';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/" component={ Login }>
          {window.location.pathname === '/' ? <Redirect to="/login" /> : ''}
        </Route>
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ ClientProducts } />
        <Route exact path="/seller/orders" component={ Seller } />
        <Route exact path="/customer/orders" component={ Orders } />
        <Route exact path="/customer/orders/:id" component={ CustomerDetails } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/seller/orders/:id" component={ SellerDetails } />
        <Route exact path="/admin/manage" component={ AdminManager } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
