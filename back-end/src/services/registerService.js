const { Op } = require('sequelize');
const { users } = require('../database/models');
const JWT = require('./utility/jwt');

const conflictUser = async (name, email) => {
  try {
    const result = await users.findOne({ where: { [Op.or]: [{ name }, { email }] } });
    return result;
  } catch (error) {
    return {
      statusCode: 500,
      message: 'Error in DB',
    };
  }
};

const registerUser = async (name, email, password) => {
  try {
    if (await conflictUser(name, email)) return { statusCode: 409, message: 'Conflict' };

    const result = await users.create({
      name,
      email,
      password,
      role: 'customer',
    });

    const token = JWT(result.dataValues);
    const user = { name, email, role: result.dataValues.role, token };

    return {
      statusCode: 201,
      message: 'Created',
      json: { user },
    };
  } catch (error) {
    return { statusCode: 500, message: 'Error in DB' };
  }
};

module.exports = {
  registerUser,
};
