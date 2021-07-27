import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { AdminManage, Login, SalesBySeller } from './pages';

const Routes = () => (
  <Switch>
    {/* <Route exact path="/explorar/comidas/ingredientes">
      <ExploreByIngredients drinksOrFoods="foods" />
    </Route> */}
    <Route path="/login" component={ Login } />
    <Route exact path="/">
      <Redirect to="/login" />
    </Route>
    <Route path="/admin/manage" component={ AdminManage } />
    <Route path="/seller/sale" component={ SalesBySeller } />

  </Switch>
);

export default Routes;
