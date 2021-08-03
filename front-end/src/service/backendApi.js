export const API_PRODUCTS_URL = 'http://127.0.0.1:3001/customer/products';

export const API_LOGIN_URL = ({ email, password }) => ({
  method: 'post',
  url: 'http://127.0.0.1:3001/login',
  data: { email, password },
});

export const API = (token) => ({
  customer: {
    method: 'get',
    url: 'http://127.0.0.1:3001/customer/orders',
    headers: {
      authorization: token,
    },
  },
  seller: {
    method: 'get',
    url: 'http://127.0.0.1:3001/seller/orders',
    headers: {
      authorization: token,
    },
  },
});
