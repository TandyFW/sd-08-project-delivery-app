import React from 'react';
import CheckoutForm from '../../components/CheckoutForm';
import Header from '../../components/Header';
import CheckoutDetails from '../../components/CheckoutDetails';

import { clientHeaderLinks } from '../../services/HeaderButtons';

function Checkout() {
  return (
    <div>
      <Header dinamicButtons={ clientHeaderLinks } />
      <CheckoutDetails />
      <CheckoutForm />
    </div>
  );
}

export default Checkout;
