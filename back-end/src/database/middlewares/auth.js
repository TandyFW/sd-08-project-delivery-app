const JWT = require('jsonwebtoken');
const fs = require('fs');
const  { User } = require('../models');

const getToken = async (data) => {
  try {
    const jwtConfig = {
      expiresIn: '1d',
      algorithm: 'HS256',
    };
    const { password, ...dataUser } = data;
    const secret = fs.readFileSync('../../../jwt.evaluation.key');
  } catch (error) {
    
  }
}  
