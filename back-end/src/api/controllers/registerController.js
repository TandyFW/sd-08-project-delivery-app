const userRegister = async (req, res) => {
  const { token } = req;
  console.log('aqui');
  return res.status(201).json({ token });
};

module.exports = { userRegister };
