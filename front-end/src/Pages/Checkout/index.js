import React from 'react';
import Header from '../../components/Header';
import OrderDetails from '../../components/OrderDetails';

import { clientHeaderLinks } from '../../services/HeaderButtons';

function Checkout() {
  return (
    <div>
      <Header dinamicButtons={ clientHeaderLinks } />
      <OrderDetails />
    </div>
  );
}

export default Checkout;
