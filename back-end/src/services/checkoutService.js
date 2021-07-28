const { sales, salesProducts } = require('../database/models');

const transaction = async (Sale) => {
  const resultTransaction = await sales.sequelize.transaction(async (t) => {
    const result = await sales.create({
      userId: Sale.userId,
      sellerId: Sale.sellerId,
      totalPrice: Sale.totalPrice,
      deliveryAddress: Sale.deliveryAddress,
      deliveryNumber: Sale.deliveryNumber,
      status: 'Pendente',
    }, { transaction: t });

    const novoArray = Sale.array.map((product) => ({ ...product, saleId: result.dataValues.id }));
  
    await salesProducts.bulkCreate(novoArray,
    { transaction: t });
  
    return result;
  });

  return resultTransaction;
}; 

const creatCheckout = async (Sale) => {
  try {
    const result = await transaction(Sale);

    return {
      statusCode: 200,
      json: result,
    };
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
