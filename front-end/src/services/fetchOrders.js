const axios = require('axios');

const fetchOrders = () => {
  const orders = axios.post('http://localhost:3001/orders', {
    idUser,
  })
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => err);
  return orders;
};
export default fetchOrders;
