import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Reset } from 'styled-reset';

import Provider from './context/Provider';
import Login from './Pages/Login';
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
        </Switch>
      </ThemeProvider>
    </Provider>
  );
}

export default App;
