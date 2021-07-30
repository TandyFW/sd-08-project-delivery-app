import React from 'react';
import { NavBar, Checkout } from '../components';
import { lStorage } from '../utils';

const CheckoutPage = () => {
  const screens = [
    { name: 'Produtos', testId: 'products' }, { name: 'Meus Pedidos', testId: 'orders' },
  ];
  const userFullName = lStorage().user.get().name;
  return (
    <div>
      <NavBar screens={ screens } user={ userFullName } />
      <Checkout />
    </div>
  );
};

export default CheckoutPage;
