import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import Socket from '../service/socketConfig';

export const GlobalContext = createContext();
export function GlobalProvider({ children }) {
  const ls = JSON.parse(localStorage.getItem('user'));
  const [name, setName] = useState('SEM-NOME');
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [storedLS, setStoredLS] = useState(ls);

  const socket = Socket();

  const provide = {
    values: {
      name,
      storedLS,
      totalPrice,
      products,
    },
    functions: {
      setName,
      setStoredLS,
      setTotalPrice,
      setProducts,
    },
    socket,
  };

  return (
    <GlobalContext.Provider value={ provide }>
      {children}
    </GlobalContext.Provider>
  );
}

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
