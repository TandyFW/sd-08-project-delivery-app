const { sales, salesProducts } = require('../database/models');

const creatCheckout = async (userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, quantity) => {
  console.log(quantity);
  try {
    const result = await sequelize.transaction(async (t) => {
      const result = await sales.create({
        userId,
        sellerId,
        totalPrice,
        deliveryAddress,
        deliveryNumber,
        status: "Pendente",
      }, { transaction: t });

      await salesProducts.bulkcreate(quantity,
      { transaction: t });

      return result;
    });

    return {
      statusCode: 200,
      json: result,
    }
  } catch (error) {
    console.log(error);
    return {
      statusCode: 500,
      message: 'Erro in DB',
    };
  }
};

module.exports = {
  creatCheckout,
};
