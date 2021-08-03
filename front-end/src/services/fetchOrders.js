const axios = require('axios');
const PATH_CUSTOMER = 'orders';
const PATH_SELLER = 'seller/orders';

const fetchOrders = (user) => {
  if (user === 'customer') const path = PATH_CUSTOMER;
  if (user === 'seller') const path = PATH_SELLER;
  
  const orders = axios.get(`http://localhost:3001/${path}`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => err);
  return orders;
};
export default fetchOrders;
