const axios = require('axios');

const endpoint = 'http://localhost:3001';

const requestApi = async (route, method = 'GET', data, token) => {
  const options = {
    url: `${endpoint}${route}`,
    method,
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json;charset=UTF-8',
      authorization: token,
    },
    data,
  };

  return axios(options)
    .then((response) => response.data);
};

export const loginRequest = (user, setUsrNotFound, history) => (
  requestApi('/login', 'POST', user)
    .then((response) => {
      history.push('/customer/products');
      return response;
    })
    .catch((err) => {
      setUsrNotFound(true);
      return err.response;
    }));

export const registerRequest = (user, setUsrExists, history) => (
  requestApi('/user', 'POST', user)
    .then((response) => {
      history.push('/customer/products');
      return response;
    })
    .catch((err) => {
      setUsrExists(true);
      return err.response;
    })
);

export default requestApi;
