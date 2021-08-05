const administratorService = require('../services/administratorService');

const administrator = async (req, res) => {
  const { name, email, password, role } = req.body;

  const { statusCode, message, json } = await administratorService
    .administratorUser(name, email, password, role);

  res.status(statusCode).json({ message, json });
};

module.exports = administrator;
