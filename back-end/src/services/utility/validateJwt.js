const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
const { users } = require('../../database/models');

const secret = fs.readFileSync(path
  .resolve(__dirname, '..', '..', '..', 'jwt.evaluation.key'), 'utf-8');

const msg = 'Expired or invalid token';
const msg1 = 'Token not found';

const validateJwt = async (req, res, next) => {
  const token = req.headers.authorization;
  console.log(token);
  
  if (!token) return res.status(401).json({ message: msg1 });
  
  try {
    const decoded = jwt.verify(token, secret);
    const { email } = decoded;
    const exists = await users.findOne({ where: { email } });
    
    if (!exists) return res.status(400).json({ message: msg });

    next();
  } catch (err) {
    return res.status(401).json({ message: msg });
  }
};

module.exports = validateJwt;
