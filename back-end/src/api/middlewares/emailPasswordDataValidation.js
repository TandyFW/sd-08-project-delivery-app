module.exports = (req, res, next) => {
  const { email, password } = req.body;
  const PASSWORD_MIN_LENGTH = 6;
  const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/i;

  if (!email) {
    return res.status(400).send({ message: '"email" must not be emppty' });
  }
  if (!password) {
    return res.status(400).send({ message: '"password" must not be empty' });
  }

  if (!emailRegex.test(email)) {
    return res.status(400).send({ message: '"email" must be a valid email' });
  }
  if (password.length < PASSWORD_MIN_LENGTH) {
    return res.status(400).send({ message: '"password" length must be 6 characters long' });
  }
  next();
};
