const axios = require('axios');

const sendOrder = async (
  {
    userId,
    sellerId,
    totalPrice,
    deliveryAddress,
    deliveryNumber,
    productsList,
  },
  token,
) => {
  try {
    const orderId = await axios.post('http://localhost:3001/sales', {
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productsList,
    },
    {
      headers: {
        Authorization: token,
      },
    });

    return orderId.data;
  } catch (err) {
    return false;
  }
};

export default sendOrder;
