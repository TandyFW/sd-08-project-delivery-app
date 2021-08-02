const { user } = require('../../../database/models');

module.exports = async (name, email, password, role) => {
  const result = await user.create({ name, email, password, role });

  return result;
};
