import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [userData, setUserData] = useState([]);
  const [cart, setCart] = useState([]);
  const context = {
    userData,
    setUserData,
    cart,
    setCart,
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
