import React, { createContext, useState } from 'react';

import PropTypes from 'prop-types';

export const GlobalContext = createContext();

export function GlobalProvider({ children }) {
  const [name, setName] = useState('SEM-NOME');

  const provide = {
    values: {
      name,
    },
    functions: {
      setName,
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
