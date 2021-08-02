import React from 'react';
import CheckoutForm from '../../components/CheckoutForm';
import Header from '../../components/Header';
import OrderDetails from '../../components/OrderDetails';

import { clientHeaderLinks } from '../../services/HeaderButtons';

function Checkout() {
  return (
    <div>
      <Header dinamicButtons={ clientHeaderLinks } />
      <OrderDetails />
      <CheckoutForm />
    </div>
  );
}

export default Checkout;
