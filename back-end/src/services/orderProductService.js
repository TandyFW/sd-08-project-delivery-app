const { sales, products, users } = require('../database/models');

const findOrdersById = async (id) => {
  try {
    const result = await sales.findAll({ where: { id },
      include: [{ model: products, as: 'products', through: { attributes: ['quantity'] } },
      { model: users, as: 'userSeller' },
    ],
      attributes: ['id', 'status', 'saleDate', 'totalPrice'],
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
