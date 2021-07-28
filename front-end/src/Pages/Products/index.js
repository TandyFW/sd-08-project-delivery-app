import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import Header from '../../components/Header';
import DeliveryContext from '../../context/DeliveryContext';
import ProductList from '../../components/ProductList';

import { clientHeaderLinks } from '../../services/HeaderButtons';

const Products = ({ history }) => {
  const { cart } = useContext(DeliveryContext);

  const totalPrice = () => cart.reduce((acc, curr) => (
    acc + (curr.count * curr.price)), 0).toFixed(2).replace('.', ',');

  return (
    <>
      <Header dinamicButtons={ clientHeaderLinks } />
      <ProductList />
      <Button
        variant="contained"
        color="primary"
        onClick={ () => history.push('/customer/checkout') }
        disabled={ cart.length === 0 }
      >
        Ver Carrinho
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          {totalPrice()}
        </span>
      </Button>
    </>);
};

Products.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Products;
