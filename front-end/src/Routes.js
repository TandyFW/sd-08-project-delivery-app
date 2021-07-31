import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Context from './context/Context';

import Login from './views/Login/index';
import Components from './views/Components';
import Home from './views/Home';
import Register from './views/Register';
import CustomerRouts from './views/Customer/Routes';
import AdminRouts from './views/Admin/Routes';

function Routes() {
  const { userData, setUserData } = useContext(Context);

  if (!userData) {
    const userLocalStorage = JSON.parse(localStorage.getItem('user'));
    if (userLocalStorage) {
      const { token, name, email, role } = userLocalStorage;
      setUserData({ token, user: { name, email, role } });
    }
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/" component={ Home } />
        <Route path="/login" component={ Login } />
        <Route path="/components" component={ Components } />
        <Route path="/register" component={ Register } />
        { userData && userData.user && userData.user.role === 'customer' && (
          <Route path="/customer" component={ CustomerRouts } />
        )}
        { userData && userData.user && userData.user.role === 'administrator' && (
          <Route path="/admin" component={ AdminRouts } />
        )}
      </Switch>
    </Router>
  );
}

export default Routes;
