import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Pages from './pages';

const Routes = () => (
  <Switch>
    {/* <Route exact path="/explorar/comidas/ingredientes">
      <ExploreByIngredients drinksOrFoods="foods" />
    </Route> */}
    <Route path="/login" component={ Pages.Login } />
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route path="/admin/manage" component={ Pages.AdminManage } />
    <Route path="/register" component={ Pages.Register } />
    <Route path="/customer/checkout" component={ Pages.Checkout } />
    <Route path="/customer/products" component={ Pages.Products } />
    <Route path="/customer/checkout" />
  </Switch>
);

export default Routes;
