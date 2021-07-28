import React, { createContext } from 'react';

import PropTypes from 'prop-types';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  // const [hideSearchBar, setHideSearchBar] = useState(true);

  const obj = {
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
