import React, { Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/Login';
import ProductsFake from './pages/ProductsFake';

function Routes() {
  return (
    <Switch>
      <Route path="/customer/products">
        <ProductsFake />
      </Route>
      <Route path="/login"><Login /></Route>
      <Route path="/"><Redirect to="/login" /></Route>
    </Switch>
  );
}

export default Routes;
