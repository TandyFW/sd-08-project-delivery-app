export const API_LOGIN_URL = 'http://127.0.0.1:3001/login';
export const API_REGISTER_URL = 'http://127.0.0.1:3001/register';

// apenas para testes
// necessario aplicar o token manualmente
const token = localStorage.getItem('token') || '999';

export const API_CUSTUMER_ORDER_URL = {
  method: 'get',
  url: 'http://127.0.0.1:3001/customer/orders',
  headers: {
    authorization: token,
  },
};
