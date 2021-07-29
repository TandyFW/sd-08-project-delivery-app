export const API_PRODUCTS_URL = 'http://127.0.0.1:3001/customer/products';

export const API_LOGIN_URL = ({ email, password }) => ({
  method: 'post',
  url: 'http://127.0.0.1:3001/login',
  data: { email, password },
});

// apenas para testes
// necessario aplicar o token manualmente
const users = JSON.parse(localStorage.getItem('user')) || { token: '999' };

export const API_CUSTUMER_ORDER_URL = {
  method: 'get',
  url: 'http://127.0.0.1:3001/customer/orders',
  headers: {
    authorization: users.token,
  },
};
