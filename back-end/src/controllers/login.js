const joi = require('joi');

const loginSchema = joi.object({
  email: joi.string().required(),
  password: joi.string().required(),
});

const login = (req, res) => {
  const { error } = loginSchema.validate(req.body);

  if (error) throw error;

  res.json({ message: 'okay' });
};

module.exports = login;
