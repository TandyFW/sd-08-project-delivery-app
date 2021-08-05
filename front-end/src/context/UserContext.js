import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

const UserContext = createContext();

const getUserData = (key) => {
  const user = JSON.parse(localStorage.getItem('user'));
  return user && user[key] ? user[key] : null;
};

export function DeliveryProvider({ children }) {
  const [name, setName] = useState(() => getUserData('name'));
  const [email, setEmail] = useState(() => getUserData('email'));
  const [role, setRole] = useState(() => getUserData('role'));
  const [token, setToken] = useState(() => getUserData('token'));

  const logout = () => {
    setName('');
    setEmail('');
    setRole('');
    setToken('');
  };

  const contextValue = {
    name,
    setName,
    email,
    setEmail,
    role,
    setRole,
    token,
    setToken,
    logout,
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
