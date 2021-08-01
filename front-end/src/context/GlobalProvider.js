import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [name, setName] = useState('SEM-NOME');
  const [totalPrice, setTotalPrice] = useState(0);
  const [products, setProducts] = useState([]);

  const provide = {
    values: {
      name,
      totalPrice,
      products,
    },
    functions: {
      setName,
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
