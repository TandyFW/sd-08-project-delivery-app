const User = (sequelize, DataTypes) => {
  const user = sequelize.define('User', {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    tableName: 'users',
  });
  
  user.associate = (models) => {
    user.hasMany(models.Sale,
      { foreignKey: 'userId', as: 'pucharses' });
    user.hasMany(models.Sale,
      { foreignKey: 'sellerId', as: 'sales' });
  };

  return user;
};

module.exports = User;