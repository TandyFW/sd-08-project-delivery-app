const { Op } = require('sequelize');
const { users } = require('../database/models');

const conflictUser = async (name, email) => {
  try {
    const result = await users.findOne({ where: { [Op.or]: [{ name }, { email }] } });
    console.log(result);
    return result;
  } catch (error) {
    return {
      statusCode: 500,
      message: 'Error in DB',
    };
  }
};

const administratorUser = async (name, email, password, role) => {
  try {
    if (await conflictUser(name, email)) return { statusCode: 409, message: 'Conflict' };

    await users.create({
      name,
      email,
      password,
      role,
    });

    return {
      statusCode: 201,
      message: 'Created',
      json: { name, email, role },
    };
  } catch (error) {
    return { statusCode: 500, message: 'Error in DB' };
  }
};

module.exports = {
  administratorUser,
};
