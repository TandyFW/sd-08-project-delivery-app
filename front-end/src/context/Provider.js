import React, { useState } from 'react';

import PropTypes from 'prop-types';

import DeliveryContext from './DeliveryContext';

const Provider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const context = {
    cart,
    setCart,
  };

  return (
    <DeliveryContext.Provider value={ context }>
      {children}
    </DeliveryContext.Provider>
  );
};

Provider.propTypes = {
  children: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default Provider;
