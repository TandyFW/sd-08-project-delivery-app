import React from 'react';
import { ThemeProvider } from '@material-ui/core';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Products from './pages/client/Products';
import Register from './pages/Register';
import theme from './theme/theme';

function App() {
  return (
    <ThemeProvider theme={ theme }>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Redirect from="/" to="/login" />
      </Switch>
    </ThemeProvider>
  );
}

export default App;
