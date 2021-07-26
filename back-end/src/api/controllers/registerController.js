const userRegister = async (req, res) => {
  const { token } = req;
  const { name, email, role } = req.body;

  return res.status(201).json({ token, user: { name, email, role }});
};

module.exports = { userRegister };
