import React, { useContext } from 'react';
import { Button } from '@material-ui/core';
import Header from '../../components/Header';
import ProductCard from '../../components/ProductCard';
import DeliveryContext from '../../context/DeliveryContext';

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
  price: 4.39,
}];

const Products = () => {
  const { cart } = useContext(DeliveryContext);

  const totalPrice = () => cart.reduce((acc, curr) => (
    acc + (curr.count * curr.price)), 0).toFixed(2);

  return (
    <>
      <Header dinamicButtons={ productsHeaderLinks } />
      { produtosFake.map((product, index) => (
        <ProductCard key={ index } product={ product } />
      ))}
      <Button
        variant="contained"
        color="primary"
      >
        {`Ver Carrinho R$ ${totalPrice()}`}
      </Button>
    </>);
};

export default Products;
