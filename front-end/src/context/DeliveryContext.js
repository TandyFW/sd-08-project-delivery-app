import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const DeliveryContext = createContext();

export function DeliveryProvider({ children }) {
  const [name, setName] = useState('name');
  const [email, setEmail] = useState('email');
  const [role, setRole] = useState('role');
  const [token, setToken] = useState('token');

  const contextValue = {
    name,
    setName,
    email,
    setEmail,
    role,
    setRole,
    token,
    setToken,
  };

  return (
    <DeliveryContext.Provider value={ contextValue }>
      { children }
    </DeliveryContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default DeliveryContext;
