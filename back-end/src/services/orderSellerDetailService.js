const { sales, products } = require('../database/models');

const findOrdersById = async (id) => {
  try {
    const result = await sales.findAll({ where: { id },
      include: [{ model: products, as: 'products', through: { attributes: ['quantity'] } }],
      attributes: ['id', 'status', 'salesDate'],
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
  findOrdersById,
};
