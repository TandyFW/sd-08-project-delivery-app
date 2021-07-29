import React, { useContext } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import CartContext from '../context/CartContext';

const Wrapper = styled.div`
  align-items: center;
  border-radius: 10px;
  display: inline-grid;
  grid-template-columns: 1fr 1.5fr 1fr;
  max-width: 200px;
  overflow: hidden;
  width: 100%;

  * {
    padding: 5px;
    text-align: center;
  }
`;

const Action = styled.button`
  background-color: ${({ theme }) => theme.colors.primary};
  border: none;
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  font-size: 3rem;
  font-weight: 700;
  user-select: none;
`;

const Count = styled.input.attrs(() => ({
  type: 'number',
}))`
  align-items: center;
  border: 2px solid #001813;
  color: #828282;
  display: flex;
  font-size: 2rem;
  height: 100%;
  justify-content: center;
  text-align: center;
  width: 100%;

  &::-webkit-outer-spin-button, &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  /* Firefox */
  input[type=number] {
    -moz-appearance: textfield;
  }
`;

const Counter = ({ id }) => {
  const { setCartQuantity, incCartQuantity,
    decCartQuantity, cart } = useContext(CartContext);

  return (
    <Wrapper>
      <Action
        onClick={ () => decCartQuantity(id) }
        data-testid={ `customer_products__button-card-rm-item-${id}` }
      >
        -
      </Action>

      <Count
        value={ cart[id] || 0 }
        data-testid={ `customer_products__input-card-quantity-${id}` }
        onChange={ ({ target }) => setCartQuantity(id, target.value) }
      />

      <Action
        onClick={ () => incCartQuantity(id) }
        data-testid={ `customer_products__button-card-add-item-${id}` }
      >
        +
      </Action>
    </Wrapper>
  );
};

Counter.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Counter;
