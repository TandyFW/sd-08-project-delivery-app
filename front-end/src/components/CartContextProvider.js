import React, { useState } from 'react';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);

  const addToCart = (obj) => {
    if (cart.some((item) => item.id === obj.id)) {
      const newCart = cart.map((item) => (item.id === obj.id ? obj : item));
      setCart(newCart);
      localStorage.setItem('carinho', JSON.stringify(cart));
    } else {
      setCart([...cart, obj]);
      localStorage.setItem('carinho', JSON.stringify(cart));
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
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
