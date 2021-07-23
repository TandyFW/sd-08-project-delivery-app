const User = (sequelize, DataTypes) => {
  const User = sequelize.define("User", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password:DataTypes.STRING,
    role: DataTypes.STRING,
  }, { tableName: 'users', timestamps: false});

  User.associate = (models) => {
    User.hasMany(models.Sales, { foreingKey: 'user_id', foreingKey: 'seller_id', as: 'sales'})
  }

  return User;
};

module.exports = User;