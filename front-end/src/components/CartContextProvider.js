import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import CartContext from './CartContext';
import { saveState } from '../services/LocalStorage';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart
      .reduce((acc, curr) => (acc + parseFloat(curr.subTotal)), 0);
    setTotal(newTotal);
  }, [cart]);

  const formatProduct = ({ id, name, quantity, unitPrice }) => ({
    id,
    name,
    quantity,
    unitPrice,
    subTotal: quantity * parseFloat(unitPrice),
  });

  const testando = () => {
    const cartTest = {};
    saveState('carrinho', cartTest);
  };

  const addToCart = (obj) => {
    console.log('obj: ', obj);
    if (cart.some((item) => item.id === obj.id)) {
      const newCart = cart
        .map((item) => (item.id === obj.id
          ? formatProduct(obj) : formatProduct(item)));
      setCart(newCart);
      localStorage.setItem('carrinho', JSON.stringify(newCart));
    } else {
      const newCart = [...cart, formatProduct(obj)];
      setCart(newCart);
      localStorage.setItem('carrinho', JSON.stringify(newCart));
    }
  };

  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => item.id !== id);
    setCart(newCart);
    localStorage.setItem('carrinho', JSON.stringify(newCart));
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    total,
    testando,
  };

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  );
};

CartContextProvider.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.shape({})]).isRequired,
};

export default CartContextProvider;
