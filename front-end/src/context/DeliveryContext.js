import React, { createContext } from 'react';
import PropTypes from 'prop-types';

import useUserLocalStorage from '../hooks/useUserLocalStorage';

const DeliveryContext = createContext();

export function DeliveryProvider({ children }) {
  const [name, setName] = useUserLocalStorage('name');
  const [email, setEmail] = useUserLocalStorage('email');
  const [role, setRole] = useUserLocalStorage('role');
  const [token, setToken] = useUserLocalStorage('token');

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
