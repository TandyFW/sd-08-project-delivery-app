import React from 'react';
import Components from '../components';
import { lStorage } from '../utils';

const Checkout = () => {
  const screens = [
    { name: 'Produtos', testId: 'products' }, { name: 'Meus Pedidos', testId: 'orders' },
  ];
  const userFullName = lStorage().user.get().name;
  return (
    <div>
      <Components.NavBar screens={ screens } user={ userFullName } />
      <Components.Checkout />
    </div>
  );
};

export default Checkout;
