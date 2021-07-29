import React from 'react';
import PropTypes from 'prop-types';

const ProductsCart = ({ subtotal, refreshCart }) => {
  refreshCart();
  return (
    <div>
      <p>{ `Subtotal: R$${subtotal}` }</p>
    </div>
  );
};

ProductsCart.propTypes = {
  subtotal: PropTypes.number.isRequired,
  refreshCart: PropTypes.func.isRequired,
};

export default ProductsCart;
