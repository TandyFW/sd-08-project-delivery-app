import React from 'react';
import Header from '../../components/Header';

const productsHeaderLinks = [
  { name: 'produtos', link: '/products' },
  { name: 'Meus Pedidos', link: '/sei-la' },
];

const Products = () => (
  <>
    <Header dinamicButtons={ productsHeaderLinks } />
    <div>
      tela de produtos
    </div>
  </>
);

export default Products;
