import React from 'react';
import contextDelivery from './Context';
import App from '../App';
import useUserLocalStorage from '../hooks/useUserLocalStorage';

function DeliveryProvider() {
  const [name, setName] = useUserLocalStorage('name');
  const [email, setEmail] = useUserLocalStorage('email');
  const [role, setRole] = useUserLocalStorage('role');
  const [token, setToken] = useUserLocalStorage('token');
  const contextValue = {
    email,
    setEmail,
    name,
    setName,
    role,
    setRole,
    token,
    setToken,
  };

  return (
    <contextDelivery.Provider value={ contextValue }>
      <App />
    </contextDelivery.Provider>
  );
}

export default DeliveryProvider;
