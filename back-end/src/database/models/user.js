const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    role: DataTypes.STRING,
  }, { tableName: 'users', timestamps: false });

  User.associate = (models) => {
    User.hasMany(models.Sales, { foreingKey: 'user_id', as: 'user'})
    User.hasMany(models.Sales, { foreingKey: 'seller_id', as: 'seller'})
  }

  return User;
};

module.exports = User;