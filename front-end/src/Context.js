import React, { createContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';

export const Context = createContext();

const Provider = ({ children }) => {
  const [products, setProducts] = useState([]);

  const client = io('http://localhost:3002');

  useEffect(() => {
    client.emit('test', { teste: 'teste' });
  }, [client]);

  const obj = {
    products,
    setProducts,
  };
  return <Context.Provider value={ obj }>{children}</Context.Provider>;
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
