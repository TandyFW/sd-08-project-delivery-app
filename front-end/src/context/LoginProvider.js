import React, { createContext, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { API_LOGIN_URL } from '../service/backendApi';
import useAxios from '../hooks/useAxios';
import { GlobalContext } from './GlobalProvider';

export const LoginContext = createContext();
export const { Provider, Consumer } = LoginContext;
export function LoginProvider({ children }) {
  const { functions: { setToken } } = useContext(GlobalContext);
  const {
    request,
    response,
    loading,
    error,
  } = useAxios();

  const roleConfig = {
    customer: '/customer/products',
    seller: '/seller/orders',
    administrator: '/admin/manage',
  };

  const handleLoginRequest = async ({ email, password }) => {
    await request(API_LOGIN_URL({ email, password }));
  };

  const history = useHistory();
  if (response) {
    setToken(response.data.token);
    localStorage.setItem('user', JSON.stringify(response.data));
    history.push(roleConfig[response.data.role]);
  }

  const provide = {
    values: {
      response,
      loading,
      error,
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
