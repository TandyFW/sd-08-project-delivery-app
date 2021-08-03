const axios = require('axios');

const sendOrder = async ({
  userId,
  sellerId,
  totalPrice,
  deliveryAddress,
  deliveryNumber,
  productsList,
}, token) => {
  try {
    await axios.post('http://localhost:3001/sales', {
      headers: {
        authorization: token,
      },
      body: {
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        productsList,
      },
    });

    return true;
  } catch (error) {
    console.log(err);
    return false;
  }
};

export default sendOrder;
