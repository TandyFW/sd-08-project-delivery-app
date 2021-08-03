const { user } = require('../../../database/models');

module.exports = async (id) => {
  const result = await user.destroy({
    where: { id },
  });

  const message = { ok: false, message: 'User not deleted!' };
  if (result !== 0) {
    message.message = `User ${id} deleted!`;
    message.ok = true;
  }

  return message;
};
