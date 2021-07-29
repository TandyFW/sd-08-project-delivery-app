import React from 'react';
import { NavBar, ProductsList } from '../components';
import { lStorage } from '../utils';

const Products = () => {
  const screens = [
    { name: 'Produtos', testId: 'products' }, { name: 'Meus Pedidos', testId: 'orders' },
  ];
  const userFullName = lStorage().user.get().name;
  return (
    <div>
      <NavBar screens={ screens } user={ userFullName } />
      <ProductsList />
    </div>
  );
};

export default Products;
