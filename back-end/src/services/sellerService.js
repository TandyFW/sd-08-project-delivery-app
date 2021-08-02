const { users } = require('../database/models');

const findSellers = async () => {
  try {
    const result = await users.findAll({ where: { role: 'seller' } });
    
    if (!result) {
      return {
        statusCode: 404,
        json: { validate: false },
      };
    }

    return { statusCode: 200, json: result };
  } catch (err) {
    return {
      statusCode: 500,
      message: 'Erro in DB',
    };
  }
};

module.exports = {
  findSellers,
};
