import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../../context/CartContext';
import {
  Wrapper,
  Action,
  Count,
} from '../../styles/components/Input/Counter';

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
