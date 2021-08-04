const { sales } = require('../database/models');

const findOrders = async (id) => {
  try {
    const result = await sales.findAll({ where: { sellerId: id },
      raw: true,
      attributes: ['id', 'totalPrice', 'status', 'salesDate', 'deliveryAddress', 'deliveryNumber'],
    });
    
    return {
      statusCode: 200,
      json: result,
    };
  } catch (error) {
    console.log(error);
  }
};

module.exports = {
  findOrders,
};
