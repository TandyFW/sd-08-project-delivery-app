const fs = require('fs');
const jwt = require('jsonwebtoken');

const { User } = require('../database/models');
const { UNAUTHORIZED } = require('../statusCode');

const JWT_SECRET = fs.readFileSync('./jwt.evaluation.key', 'utf-8');

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    return res.status(UNAUTHORIZED)
    .json({ message: 'tokenNotFound' }); 
}
  
  try {
    const { email } = jwt.verify(token, JWT_SECRET);
    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(UNAUTHORIZED).json({ message: 'User not found' });
    }

    req.user = user;
    next();
  } catch (err) {
    return res.status(UNAUTHORIZED).json({ message: err.message });
  }
};
