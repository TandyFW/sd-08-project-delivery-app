import React, { useState } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const contextValue = {
    cart,
    setCart,
  };

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.shape({}).isRequired,
};

export default CartContextProvider;
