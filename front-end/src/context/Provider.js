import React from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const context = {

  };
  return (
    <Context.Provider value={ context }>{children}</Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Provider;
