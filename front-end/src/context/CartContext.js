import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const CartContext = createContext();

export function CartProvider({ children }) {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState({});

  const setCartQuantity = (id, quantity) => {
    if (Number.isNaN(quantity)) return;
    setCart({ ...cart, [id]: Number(quantity) });
  };

  const incCartQuantity = (id) => {
    if (!cart[id]) return setCart({ ...cart, [id]: 1 });
    setCart({ ...cart, [id]: cart[id] + 1 });
  };

  const decCartQuantity = (id) => {
    if (!cart[id]) return setCart({ ...cart, [id]: 0 });
    setCart({ ...cart, [id]: Math.max(0, cart[id] - 1) });
  };

  const removeCartItem = (id) => {
    const { [id]: itemToRemove, ...keep } = cart;
    setCart(keep);
  };

  const getCartTotal = () => (
    Object.entries(cart).reduce((acc, [id, quantity]) => {
      const product = products.find((currentProduct) => currentProduct.id === Number(id));
      return acc + (product.price * quantity);
    }, 0)
  );

  const contextValue = {
    products,
    setProducts,
    cart,
    setCartQuantity,
    incCartQuantity,
    decCartQuantity,
    getCartTotal,
    removeCartItem,
  };

  return (
    <CartContext.Provider value={ contextValue }>
      { children }
    </CartContext.Provider>
  );
}

CartProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default CartContext;
