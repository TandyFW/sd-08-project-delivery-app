const user = (sequelize, DataTypes) => {
  const user = sequelize.define("users", {
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    role: DataTypes.STRING,
  },
  {
    timestamps: false,
    underscored: true,
  });

  user.associate = (models) => {
    user.hasMany(models.sales,
      { foreignKey: 'userId', as: 'sale' });
    user.hasMany(models.sales,
      { foreignKey: 'sellerId', as: 'sale_seller' });
  };

  return user;
}

module.exports = user;
