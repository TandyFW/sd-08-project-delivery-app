const registerServices = require('./registerService');
const createToken = require('../auth/createToken');
const loginSchema = require('../schemas/loginSchema');
const clientError = require('../utils/clientError');

let dataloginDB = null;

const login = async (dataForlogin) => {
  const { error } = loginSchema.login.validate(dataForlogin);
  if (error) return clientError.badRequest(error.details[0].message);

  try {
  const { dataValues } = await registerServices.getByEmail(dataForlogin.email);
  dataloginDB = dataValues;
  } catch (err) {
    return clientError.badRequest('User Not registered');
  }
  
  if (dataloginDB.password !== dataForlogin.password) {
    return clientError.badRequest('Email Our Password Invalid');
  }
  
  const { name, email, id } = dataloginDB;
   const token = await createToken({ name, email, id });
   return token;
};

module.exports = {
  login,
};
