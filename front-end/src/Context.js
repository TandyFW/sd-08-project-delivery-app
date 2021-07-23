import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

export const Context = createContext();

const Provider = ({ children }) => {
  const [text, setText] = useState('');

  const obj = {
    text,
    setText,
  };
  return (
    <Context.Provider value={ obj }>
      {children}
    </Context.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};
