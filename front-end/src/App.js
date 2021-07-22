import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/login" component={ Login } />
        <Route exact path="/" component={ Login }>
          {window.location.pathname === '/' ? <Redirect to="/login" /> : ''}
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
