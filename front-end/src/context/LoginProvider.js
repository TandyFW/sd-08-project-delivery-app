import React, { createContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { API_LOGIN_URL } from '../service/backendApi';
import useAxios from '../hooks/useAxios';

export const LoginContext = createContext();
export const { Provider, Consumer } = LoginContext;
export function LoginProvider({ children }) {
  const {
    request,
    response,
    loading,
    loginError,
  } = useAxios();

  const handleLoginRequest = async ({ email, password }) => {
    await request(API_LOGIN_URL({ email, password }));
  };

  const history = useHistory();
  if (response) {
    history.push('/customer/products');
  }

  const provide = {
    values: {
      response,
      loading,
      loginError,
    },
    functions: {
      handleLoginRequest,
    },
  };
  return (
    <Provider value={ provide }>
      {children}
    </Provider>
  );
}

LoginProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
