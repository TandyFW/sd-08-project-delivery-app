import React from 'react';
import PropTypes from 'prop-types';
import myContext from './CreateContext';

function Provider({ children }) {
  const value = {  };

  return (
    <myContext.Provider value={ value }>
      { children }
    </myContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
