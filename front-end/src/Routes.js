import React, { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import CustomerProducts from './pages/CustomerProducts';

function Routes() {
  return (
    <Switch>
      <Route path="/customer/products">
        <CustomerProducts />
      </Route>
      <Route path="/login"><Login /></Route>
      <Route path="/"><Redirect to="/login" /></Route>
    </Switch>
  );
}

export default Routes;
