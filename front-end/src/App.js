import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Management from './pages/admin/Management';
import Products from './pages/client/Products';
import Register from './pages/Register';
import Login from './pages/Login';
import theme from './theme/theme';
import MyOrders from './pages/client/MyOrders';
import Checkout from './pages/client/Checkout';
import OrderDetails from './pages/client/OrderDetails';
import Orders from './pages/Seller/Orders';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/customer/orders" component={ MyOrders } />
        <Route exact path="/customer/orders/:id" component={ OrderDetails } />
        <Route exact path="/customer/checkout" component={ Checkout } />
        <Route exact path="/admin/manage" component={ Management } />
        <Route exact path="/seller/orders/:id" component={ OrderDetails } />
        <Route exact path="/seller/orders" component={ Orders } />
        <Redirect from="/" to="/login" />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
