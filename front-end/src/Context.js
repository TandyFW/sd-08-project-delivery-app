import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';
import api from './Apis/api1';

export const Context = createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const client = io('http://localhost:3002');

  useEffect(() => {
    client.emit('test', { teste: 'teste' });
  }, [client]);

  useEffect(() => {
    const loadProducts = async () => {
      const responseProducts = await api
        .productsFetch()
        .then((data) => data.data.response)
        .catch((err) => err.message);
      setProducts(responseProducts.map((product) => ({ ...product, quantity: 0 })));
    };
    loadProducts();
  }, []);

  const obj = {
    products,
    setProducts,
    totalPrice,
    setTotalPrice,
  };
  return <Context.Provider value={ obj }>{children}</Context.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};