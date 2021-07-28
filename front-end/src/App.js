import React from 'react';
import './styles/main.scss';
import { Route, Switch } from 'react-router-dom';
import { Home, Login, Register, Products, Orders } from './pages';

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route exact path="/login" component={ Login } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/customer/products" component={ Products } />
        <Route exact path="/seller/orders" component={ Orders } />
      </Switch>
    </div>
  );
}

export default App;
