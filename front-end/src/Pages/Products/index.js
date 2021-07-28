import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import Header from '../../components/Header';
import DeliveryContext from '../../context/DeliveryContext';
import ProductList from '../../components/ProductList';

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

const Products = () => {
  const { cart } = useContext(DeliveryContext);

  const totalPrice = () => cart.reduce((acc, curr) => (
    acc + (curr.count * curr.price)), 0).toFixed(2);

  return (
    <>
      <Header dinamicButtons={ productsHeaderLinks } />
      <ProductList />
      <Button
        variant="contained"
        color="primary"
      >
        {`Ver Carrinho R$ ${totalPrice()}`}
      </Button>
    </>);
};

export default Products;
