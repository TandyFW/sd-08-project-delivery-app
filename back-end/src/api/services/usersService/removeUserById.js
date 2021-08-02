const { user } = require('../../../database/models');

module.exports = async (id) => {
  const result = await user.destroy({
    where: { id },
  });

  return result;
};
