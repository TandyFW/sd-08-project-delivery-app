import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Adm from './pages/Adm';
import ClientProducts from './pages/CustomerProducts';
import Login from './pages/Login';
import Register from './pages/Register';
import Seller from './pages/Seller';
import Orders from './pages/Orders';
import saleDetails from './pages/SaleDetails';

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
        <Route exact path="/customer/seller" component={ Seller } />
        <Route exact path="/customer/adm" component={ Adm } />
        <Route exact path="/customer/orders" component={ Orders } />
        <Route exact path="/customer/orders/:id" component={ saleDetails } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
