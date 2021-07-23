module.exports = (sequelize, DataTypes) => {
  const sale_product = sequelize.define('sale_product', {
    sale_id: DataTypes.INT,
    product_id: DataTypes.INT,
    quantity: DataTypes.INT,
  },
  {
    timestamps: false,
    tableName: 'sales_products',
  });
  // user.associate = (models) => {
  //   user.belongsTo(models.user, { foreignKey: 'id', as: 'user_id' });
  //   user.belongsTo(models.user, { foreignKey: 'id', as: 'seller_id' });
  // };
  return sale_product;
};