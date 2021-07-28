import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Header from '../../components/Header';
import DeliveryContext from '../../context/DeliveryContext';
import ProductList from '../../components/ProductList';

const productsHeaderLinks = [
  {
    name: 'produtos',
    link: '/customer/products',
    testId: 'customer_products__element-navbar-link-products',
  },
  {
    name: 'Meus Pedidos',
    link: '/customer/checkout',
    testId: 'customer_products__element-navbar-link-orders',
  },
];

const Products = ({ history }) => {
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
        onClick={ () => history.push('/customer/checkout') }
      >
        {`Ver Carrinho R$ ${totalPrice()}`}
      </Button>
    </>);
};

Products.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Products;
