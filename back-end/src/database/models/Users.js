const Users = (sequelize, DataTypes) => {
  const users = sequelize.defined('users', {
    email: {
      type: DataTypes.STRING,
      notNull: true,
    },
    name: {
      type: DataTypes.STRING,
      notNull: true,
    },
    password: {
      type: DataTypes.STRING,
      notNull: true,
    },
    role: {
      type: DataTypes.STRING,
      notNull: true,
    },
  });

  return users;
};

module.exports = Users;
