import React from 'react';
import contextDelivery from './Context';
import App from '../App';
import useLocalStorage from '../hooks/useLocalStorage';

function DeliveryProvider() {
  const [name, setName] = useLocalStorage('name');
  const [email, setEmail] = useLocalStorage('email');
  const [role, setRole] = useLocalStorage('role');
  const [token, setToken] = useLocalStorage('token');
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
