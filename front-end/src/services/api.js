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

export const login = (user, setUsrNotFound) => {
  requestApi('/login', 'POST', user)
    .then(console.log)
    .catch((err) => {
      setUsrNotFound(true);
      return err.response;
    });
};

export const register = (user) => {
  requestApi('/user', 'POST', user)
    .then(console.log)
    .catch((err) => err.response);
};

export default requestApi;
