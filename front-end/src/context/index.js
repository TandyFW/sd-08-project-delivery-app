import React, { createContext } from 'react';
import PropTypes from 'prop-types';
import { io } from 'socket.io-client';

const socket = io('http://localhost:3001');

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // const [hideSearchBar, setHideSearchBar] = useState(true);

  const obj = {
    socket,
    // hideSearchBar: { value: hideSearchBar, set: setHideSearchBar },
  };
  return (
    <Context.Provider value={ obj }>
      { children }
    </Context.Provider>
  );
};

ContextProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export default ContextProvider;
