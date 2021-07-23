module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.STRING(255),
    price: DataTypes.STRING(255),
    url_image: DataTypes.STRING(255),
  },
  {
    timestamps: false,
    tableName: 'products',
  });
  // user.associate = (models) => {
  //   user.belongsTo(models.user, { foreignKey: 'id', as: 'user_id' });
  //   user.belongsTo(models.user, { foreignKey: 'id', as: 'seller_id' });
  // };
  return product;
};