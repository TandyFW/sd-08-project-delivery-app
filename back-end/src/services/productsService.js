const { products } = require('../database/models');


const findProducts = async () => {
  try {
    const result = await products.findAll({});
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
  findProducts,
};
