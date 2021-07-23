module.exports = (sequelize, DataTypes) => {
  const product = sequelize.define('product', {
    name: DataTypes.VARCHAR(100),
    price: DataTypes.DECIMAL(4,2),
    url_image: DataTypes.VARCHAR(200),
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