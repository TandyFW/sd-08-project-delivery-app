const { user } = require('../../database/models');

module.exports = async (id) => {
  const result = await user.findOne({ where: { id } });

  return result;
};
