module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING(100),
    email: DataTypes.STRING(100),
    password: DataTypes.STRING(32),
    role: DataTypes.STRING(20)
  }, { tableName: 'users' });

  User.associate = (models) => {
    User.hasMany(models.Sale);
  }

  return User;
};
