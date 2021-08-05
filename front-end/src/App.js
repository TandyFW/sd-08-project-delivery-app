import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Checkout from './pages/Checkout';
import Follower from './pages/Follower';
import Login from './pages/Login';
import Orders from './pages/Orders';
import Register from './pages/Register';
import './App.css';
import Products from './pages/Products';
import OrderDetails from './pages/OrderDetails';
import Manage from './pages/Manage';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Follower } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      <Route exact path="/customer/products" component={ Products } />
      <Route exact path="/customer/checkout" component={ Checkout } />
      <Route exact path="/customer/orders" component={ Orders } />
      <Route exact path="/customer/orders/:id" component={ OrderDetails } />
      <Route exact path="/seller/orders" component={ Orders } />
      <Route exact path="/seller/orders/:id" component={ OrderDetails } />
      {/* <Route exact path="/confirmation" component={Confirmation} /> */}
      <Route exact path="/admin/manage" component={ Manage } />
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

export default App;
