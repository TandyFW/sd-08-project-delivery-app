const userSchema = require('../schemas/usersSchema');
const { user } = require('../database/models');

const createUsers = async (dataForCreate) => {
  const { error } = userSchema.createUser.validate(dataForCreate);
  if (error) {
   return { 
     error: true,
     status: 500,
     message: error.details[0].message,
   };
  }
  const users = await user.create(dataForCreate);
  return users.dataValues
};

// const getAllUsers = async () => {
//   const users = await user.findAll();
//   return users;
// };

// getAllUsers().then(console.log);

module.exports = {
  createUsers,
};
