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
    await axios.post('http://localhost:3001/sales', {
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productsList,
    });

    return true;
  } catch (error) {
    console.log(err);
    return false;
  }
};

export default sendOrder;
