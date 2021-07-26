import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import AdminForm from './components/AdminForm';
import Login from './pages/Login';

function App() {
  return (
    <Switch>
      <Route exact path="/login" component={ Login } />
      <Route exact path="/admin/manage" component={ AdminForm } />
      <Redirect from="/" to="/login" />
    </Switch>
  );
}

export default App;
