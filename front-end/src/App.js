import React from 'react';
import './styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import { Home, Login } from './pages';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
