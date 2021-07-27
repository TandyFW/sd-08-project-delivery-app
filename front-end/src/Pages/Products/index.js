import React from 'react';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';

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

const produtosFake = [{
  id: 0,
  name: 'skol',
  image: `https://www.imigrantesbebidas.com.br
/bebida/images/products/full/132_Cerveja_Skol_Pilsen_Lata_350ml.jpg`,
  price: 1,
}];

const Products = () => (
  <>
    <Header dinamicButtons={ productsHeaderLinks } />
    { produtosFake.map((product, index) => (
      <ProductCard key={ index } product={ product } />
    ))}
  </>
);

export default Products;
