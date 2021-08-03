const axios = require('axios');

const endpoint = 'http://localhost:3001';

const requestApi = async (route, method = 'GET', data = {}, token = '') => {
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
      localStorage.setItem('user', JSON.stringify(response.user));

      history.push('/customer/products');
    })
    .catch((err) => {
      setUsrExists(true);
      return err.response;
    })
);

export const getProducts = (token) => requestApi('/product', 'GET', {}, token);

export const postSale = async (sellerId,
  user, { deliveryAddress, deliveryNumber }, products) => {
  const data = {
    userId: user.id,
    sellerId,
    totalPrice: products
      .reduce((acc, { count, price }) => acc + Number(count * price), 0)
      .toFixed(2),
    deliveryAddress,
    deliveryNumber,
    products: products.map(({ id, count }) => ({ id, quantity: count })),
  };

  console.log(data);

  return requestApi('/sale', 'POST', data, user.token);
};

export const getSaleById = (id, token) => requestApi(`/sale/${id}`, 'GET', {}, token);

export default requestApi;
