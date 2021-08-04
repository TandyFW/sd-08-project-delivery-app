const axios = require('axios');

const sendOrder = async ({
  userId,
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  productsList,
}) => {
  try {
    const orderId = await axios.post('http://localhost:3001/sales', {
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productsList,
    });

    return orderId;
  } catch (err) {
    console.log(err);
    return false;
  }
};

export default sendOrder;
