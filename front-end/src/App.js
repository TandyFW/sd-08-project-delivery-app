import React from 'react';
import './App.css';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Redirect to="login" />
        </Route>
        <Route path="/login" component={ Login } />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
