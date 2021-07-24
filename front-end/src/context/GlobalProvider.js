import React, { createContext } from 'react';

import PropTypes from 'prop-types';

export const GlobalContext = createContext();

function GlobalProvider({ children }) {
  const handleRequestSubmit = ({ email, password }) => {
    // axios
    console.log(email, password);
  };

  const provide = {
    values: {
    },
    functions: {
      handleRequestSubmit,
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
