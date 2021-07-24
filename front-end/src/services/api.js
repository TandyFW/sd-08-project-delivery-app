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
    .then((response) => response.data)
    .catch((err) => err.response);
};

export const login = (user) => {
  requestApi('/login', 'POST', user)
    .then(console.log);
};

export const register = (user) => {
  requestApi('/user', 'POST', user)
    .then(console.log);
};

export default requestApi;
