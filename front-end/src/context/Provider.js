import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const state = {
    username: {
      value: name,
      set: (newName) => { setName(newName); },
    },
    userEmail: {
      value: email,
      set: (newEmail) => { setEmail(newEmail); },
    },
  };
  return (
    <Context.Provider value={ state }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default Provider;
