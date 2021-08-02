import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../context/CartContext';
import StyledTotalValueTag from '../styles/components/TotalValueTag';

const TotalValueTag = ({ children, testId, ...props }) => {
  const { getCartTotal } = useContext(CartContext);

  return (
    <StyledTotalValueTag data-testid={ testId } { ...props }>
      { `${children}: R$` }
      <span data-testid="customer_products__checkout-bottom-value">
        { getCartTotal().toFixed(2).replace('.', ',') }
      </span>
    </StyledTotalValueTag>
  );
};

TotalValueTag.defaultProps = {
  testId: '',
};

TotalValueTag.propTypes = {
  testId: PropTypes.string,
  children: PropTypes.string.isRequired,
};

export default TotalValueTag;
