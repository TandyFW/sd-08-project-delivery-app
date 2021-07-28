import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Follower from './pages/Follower';
import Login from './pages/Login';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import './App.css';

function App() {
  return (
    <Switch>
      <Route exact path="/" component={ Follower } />
      <Route exact path="/login" component={ Login } />
      <Route exact path="/register" component={ Register } />
      {/* <Route exact path="/customer/products" component={Products} /> */}
      <Route exact path="/customer/checkout" component={ Checkout } />
      {/* <Route exact path="/customer/orders" component={CustomerOrders} /> */}
      {/* <Route exact path="/customer/orders/:id" component={OrdersDetails} /> */}
      {/* <Route exact path="/seller/orders" component={SellerOrders} /> */}
      {/* <Route exact path="/seller/orders/:id" component={OrdersDetails} /> */}
      {/* <Route exact path="/confirmation" component={Confirmation} /> */}
      {/* <Route exact path="/admin/manage" component={Manager} /> */}
      {/* <Route component={NotFound} /> */}
    </Switch>
  );
}

export default App;
