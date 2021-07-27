const { sales } = require('../database/models');

const checkoutService = async (user_id, seller_id, total_price, delivery_address, delivery_number) => {
  try {
    const result = await sales.create({
      user_id,
      seller_id,
      total_price, 
      delivery_address,
      delivery_number,
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
  checkoutService,
};
