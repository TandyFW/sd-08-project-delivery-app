const axios = require('axios');

const fetchOrderDetails = (id) => {
  const orders = axios.get(`http://localhost:3001/orders/${id}`)
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => err);
  return orders;
};

export default fetchOrderDetails;
