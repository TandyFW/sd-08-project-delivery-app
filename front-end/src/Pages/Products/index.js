import React from 'react';
import Header from '../../components/Header';

const productsHeaderLinks = [
  {
    name: 'produtos',
    link: '/products',
    testId: 'customer_products__element-navbar-link-products',
  },
  {
    name: 'Meus Pedidos',
    link: '/sei-la',
    testId: 'customer_products__element-navbar-link-orders',
  },
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
