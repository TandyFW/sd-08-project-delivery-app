import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

export function DeliveryProvider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('');
  const [token, setToken] = useState(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    return user && user.token ? user.token : '';
  });

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
    <UserContext.Provider value={ contextValue }>
      { children }
    </UserContext.Provider>
  );
}

DeliveryProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]).isRequired,
};

export default UserContext;
