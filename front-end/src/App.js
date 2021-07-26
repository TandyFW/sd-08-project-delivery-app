import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route path="/register" component={ Register } />
      <Redirect from="/" to="/login" />
    </Switch>
  );
}

export default App;
