import React from 'react';

import PropTypes from 'prop-types';

import DeliveryContext from './DeliveryContext';

const Provider = ({ children }) => {
  const context = {

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
