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
    const saleId = await axios.post('http://localhost:3001/sales', {
      userId,
      sellerId,
      totalPrice,
      deliveryAddress,
      deliveryNumber,
      productsList,
    });

    return saleId;
  } catch (error) {
    console.log(err);
    return false;
  }
};

export default sendOrder;
