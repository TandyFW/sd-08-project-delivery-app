const { Op } = require('sequelize');
const { users } = require('../database/models');

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

    await users.create({
      name,
      email,
      password,
      role: 'customer',
    });

    return {
      statusCode: 201,
      message: 'Created',
    };
  } catch (error) {
    return {
      statusCode: 500,
      message: 'Error in DB',
    };
  }
};

module.exports = {
  registerUser,
};
