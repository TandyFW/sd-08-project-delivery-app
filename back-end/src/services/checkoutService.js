const { sales } = require('../database/models');

const creatCheckout = async (userId) => {
  try {
    const result = await sales.create({
      user_id: userId,
      // sellerId,
      // totalPrice,
      // deliveryAddress,
      // deliveryNumber,
      // status: "Pendente",
    });
    
    console.log(result);

    return {
      statusCode: 200,
      json: result,
    }
  } catch (error) {

    return {
      statusCode: 500,
      message: 'Erro in DB',
    };
  }
};

module.exports = {
  creatCheckout,
};
