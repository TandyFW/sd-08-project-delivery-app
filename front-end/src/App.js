import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Products from './Pages/Products';
import Provider from './context/Provider';
import Login from './Pages/Login';
import Register from './Pages/Register';
import Checkout from './Pages/Checkout';
import OrderDetails from './Pages/OrderDetails';
import CustomerOrders from './Pages/CustomerOrders';
import SellerOrders from './Pages/SellerOrders';

import theme from './theme';

function App() {
  return (
    <Provider>
      <ThemeProvider theme={ theme }>
        <Reset />
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ Products } />
          <Route exact path="/customer/checkout" component={ Checkout } />
          <Route exact path="/customer/orders/:id" component={ OrderDetails } />
          <Route exact path="/customer/orders/" component={ CustomerOrders } />
          <Route exact path="/seller/orders/" component={ SellerOrders } />
        </Switch>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
