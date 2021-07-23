import React, { createContext } from 'react';

import PropTypes from 'prop-types';

const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const provide = {
    values: {
    },
    functions: {
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

export default GlobalProvider;
