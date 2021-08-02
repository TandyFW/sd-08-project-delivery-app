import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

const tokenGeneric = 999;
export const GlobalContext = createContext();
export function GlobalProvider({ children }) {
  const tokenLS = localStorage.getItem('user') || tokenGeneric;
  const [name, setName] = useState('SEM-NOME');
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState(tokenLS.token);
  const provide = {
    values: {
      name,
      token,
      totalPrice,
      products,
    },
    functions: {
      setName,
      setToken,
      setTotalPrice,
      setProducts,
    },
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
