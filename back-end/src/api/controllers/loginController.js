const tokenGeneration = require('../services/tokenGeneration');

const userLogin = async (req, res) => {
  const { email, id } = req.body;

  const token = tokenGeneration({ email, id });

  return res.status(200).json({ token });
};

module.exports = { userLogin };
