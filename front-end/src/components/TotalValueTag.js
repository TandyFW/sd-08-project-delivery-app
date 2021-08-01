import React, { useContext } from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import CartContext from '../context/CartContext';

const StyledTotalValueTag = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  border-radius: 10px;
  bottom: 20px;
  color: white;
  font-size: 2rem;
  font-weight: 700;
  padding: 20px;
  ${(props) => {
    if (props.absolute) {
      return css`
        position: absolute;
      `;
    }
    return css`
      position: fixed;
    `;
  }}
  right: 20px;
`;

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
