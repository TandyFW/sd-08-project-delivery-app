import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import GlobalProvider from './context/GlobalProvider';
import {
  Login,
  Register,
  Products,
  Orders,
  Checkout,
  OrdersDetails,
  Admin,
} from './pages';

function App() {
  return (
    <GlobalProvider>
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/orders" component={ Orders } />
        <Route exact path="/customer/orders/:id" component={ OrdersDetails } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/seller/orders" component={ Orders } />
        {/* <Route exact path="/seller/orders/:id" component={ OrdersDetails } /> */}
        <Route exact path="/admin/manage" component={ Admin } />
      </Switch>
    </GlobalProvider>
  );
}

export default App;
