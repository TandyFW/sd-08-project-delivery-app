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
  </Switch>
);

export default Routes;
