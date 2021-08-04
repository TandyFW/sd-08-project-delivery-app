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
  console.log({ token });
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
      } });

    return orderId;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default sendOrder;
