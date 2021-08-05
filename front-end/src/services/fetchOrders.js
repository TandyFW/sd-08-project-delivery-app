const axios = require('axios');

const PATH_CUSTOMER = 'orders';
const PATH_SELLER = 'seller/orders';

const request = async (path, userId) => {
  const orders = await axios.post(`http://localhost:3001/${path}`, {
    id: userId,
  })
    .then((response) => {
      const { data } = response;
      return data;
    })
    .catch((err) => err);
  console.log(orders);
  return orders;
};

const fetchOrders = async (user, userId) => {
  if (user === 'customer') return request(PATH_CUSTOMER, userId);
  if (user === 'seller') return request(PATH_SELLER, userId);
};

export default fetchOrders;
