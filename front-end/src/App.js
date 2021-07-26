import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Produtos from './Pages/Products';
import Provider from './context/Provider';
import Login from './Pages/Login';
import Register from './Pages/Register';
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
          <Route exact path="/products" component={ Produtos } />
        </Switch>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
