const axios = require('axios');
const PATH_CUSTOMER = 'orders';
const PATH_SELLER = 'seller/orders';

const request = (path) => {
  const orders = axios.get(`http://localhost:3001/${path}`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => err);
  return orders;
};

const fetchOrders = (user) => {
  if (user === 'customer') return request(PATH_CUSTOMER);
  if (user === 'seller') return request(PATH_SELLER);
};

export default fetchOrders;
