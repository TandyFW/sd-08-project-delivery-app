import React, { useContext } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import Login from './views/Login/index';
import Components from './views/Components';
import Home from './views/Home';
import Register from './views/Register';
import CustomerRouts from './views/Customer/Routes';
import Context from './context/Context';
import SellerOrders from './views/Seller';
import SellerDetailPage from './views/SellerDetail';

function Routes() {
  const { userData } = useContext(Context);
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
        {/* { userData && userData.user && userData.user.role === 'seller' && (
          <> */}
        <Route exact path="/seller/orders/:id" component={ SellerDetailPage } />
        <Route path="/seller/orders" component={ SellerOrders } />
        {/* </>
        )} */}
      </Switch>
    </Router>
  );
}

export default Routes;
