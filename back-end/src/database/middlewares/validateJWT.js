const jwt = require('jsonwebtoken');
const fs = require('fs');
const { User } = require('../models');

const validateJWT = async (req, res, next) => {
  const token = req.headers.authorization;
  try {
    if (!token) return res.status(401).json({ message: 'Token inexistente!'});
    const secret = fs.readFileSync('../../../jwt.evaluation.key', 'utf-8');
    const decoded = jwt.verify(token, secret);
    const user = await User.findOne({ where: { email: decoded.dataUser.email } });
    if (!user) return res.status(404).json({ message: 'Usuário não encontrado!'});
    req.user = decoded.dataUser;
    next();
  } catch (error) {
    return res.status(code.UNAUTHORIZED).json({ message: error.message });
  }
};

module.exports = validateJWT;
