import React from 'react';
import Components from '../components';

const Products = () => {
  const screens = [
    { name: 'Produtos', testId: 'products' }, { name: 'Meus Pedidos', testId: 'orders' },
  ];
  return (
    <div>
      <Components.NavBar screens={ screens } user="Teste" />
      <Components.ProductsList />
    </div>
  );
};

export default Products;
