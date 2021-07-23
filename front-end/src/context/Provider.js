import React, { useState } from 'react';
import contextDelivery from './Context';
import App from '../App';

function DeliveryProvider() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disable, setDisable] = useState(true);
  const contextValue = {
    email,
    setEmail,
    password,
    setPassword,
    disable,
    setDisable,
  };

  return (
    <contextDelivery.Provider value={ contextValue }>
      <App />
    </contextDelivery.Provider>
  );
}

export default DeliveryProvider;
