import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import CartContext from './CartContext';

const CartContextProvider = ({ children }) => {
  const [cart, setCart] = useState(JSON.parse(localStorage.getItem('carrinho')) || []);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const newTotal = cart
      .reduce((acc, curr) => (acc + parseFloat(curr.subTotal)), 0);
    setTotal(newTotal);
    console.log('total: ', total);
  }, [cart]);

  const formatProduct = ({ id, name, quantity, unitPrice }) => ({
    productId: id,
    name,
    quantity,
    unitPrice,
    subTotal: quantity * parseFloat(unitPrice),
  });

  const addToCart = (obj) => {
    console.log('obj: ', obj);
    if (cart.some((item) => item.productId === obj.id)) {
      const newCart = cart
        .map((item) => (item.productId === obj.id
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
    const newCart = cart.filter((item) => item.productId !== id);
    setCart(newCart);
    localStorage.setItem('carrinho', JSON.stringify(newCart));
  };

  const contextValue = {
    cart,
    addToCart,
    removeFromCart,
    total,
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
