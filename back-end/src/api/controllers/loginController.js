// Controller para login de usuário - retorna o token e as informações do usuário.

const userLogin = async (req, res) => {
  const { token } = req;
  const { name, email, role } = req.body;

  return res.status(200).json({ token, user: { name, email, role } });
};

module.exports = { userLogin };
