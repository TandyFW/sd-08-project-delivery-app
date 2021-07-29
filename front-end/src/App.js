import React from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import Products from './pages/Products/Products';
import Checkout from './pages/Checkout/Checkout';
import Management from './pages/Management/Management';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/admin/manage" component={ Management } />
      </Switch>
    </div>
  );
}

export default App;
