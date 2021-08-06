import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [cart, setCart] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);
  const [orderInfo, setOrderInfo] = useState([]);
  const [sellerOrders, setSellerOrders] = useState([]);

  useEffect(() => {
    const total = cart.reduce((acc, curr) => {
      console.log('CURR', curr);
      acc += Number(curr.price) * Number(curr.quantity);
      return acc;
    }, 0);
    setCartTotal(total.toFixed(2).toString().replace('.', ','));
    console.log('EFFECT', 'useEffect Rodou');
  }, [cart]);

  const updateCart = (product) => {
    // const newCart = cart.map((item) => (
    //   item.id === product.id
    //     ? { ...product, price: item.price }
    //     : item
    // ));
    const newCart = cart.map((item) => {
      if (item.id === product.id) {
        item = { ...product, name: item.name, price: item.price };
      }
      return item;
    });
    setCart(newCart);
  };

  const state = {
    username: {
      value: name,
      set: (newName) => { setName(newName); },
    },
    userEmail: {
      value: email,
      set: (newEmail) => { setEmail(newEmail); },
    },
    cart: {
      value: cart,
      update: (product) => updateCart(product),
      set: (allProducts) => setCart(allProducts),
    },
    cartTotal: {
      value: cartTotal,
    },
    orderInfo: {
      value: orderInfo,
      set: (infos) => setOrderInfo(infos),
    },
    sellerOrders: {
      value: sellerOrders,
      set: (infos) => setSellerOrders(infos),
    },
  };
  return (
    <Context.Provider value={ state }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
