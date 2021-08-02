/*  Middleware para a validação de nome de usuário para o registro. */

module.exports = (req, res, next) => {
  const { name } = req.body;
  const NAME_MIN_LENGTH = 12;

  if (!name) {
    return res.status(400).send({ message: '"name" must not be emppty' });
  }
  if (name.length < NAME_MIN_LENGTH) {
    return res.status(400).send({ message: '"name" length must be 12 characters long' });
  }
  next();
};
