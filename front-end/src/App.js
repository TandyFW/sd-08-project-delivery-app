import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/Login';

function App() {
  return (
    <div className="App">
      <Route exact path="/">
        <Redirect to="/login" />
      </Route>
      <Login />
    </div>
  );
}

export default App;
