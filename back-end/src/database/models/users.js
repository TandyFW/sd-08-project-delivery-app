const user = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false
  });

  user.associate = (models) => {
    user.hasMany(models.sale,
      { foreignKey: 'user_id', as: 'sale' });
    user.hasMany(models.sale,
      { foreignKey: 'seller_id', as: 'sale' });
  };

  return user;
}

module.exports = user;