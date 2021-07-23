const { Users } = require('../database/models');

const validUser = async (email) => {
  const findUser = await Users.findOne({ where: { email } });
  if (!findUser) throw new Error('Not found');

  return findUser;
};

module.exports = { validUser };
