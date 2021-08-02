const axios = require('axios');

const fetchOrders = () => {
  const orders = axios.get('http://localhost:3001/orders')
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => err);
  return orders;
};
export default fetchOrders;
