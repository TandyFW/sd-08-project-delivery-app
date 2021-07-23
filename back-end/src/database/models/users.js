const { DataTypes } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define('user', {
    name: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(32),
    role: DataTypes.STRING(20)
  },
  {
    timestamps: false,
    });

  user.associate = (models) => {
    user.belongsTo(models.sale);
  };

  return user;
};
