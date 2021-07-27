module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('sales_product', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.STRING
  },
  {
    timestamps: false,
  });

  salesProduct.associate = (models) => {
    salesProduct.belongsTo(models.sale, { foreignKey: 'sale_id' });
    salesProduct.hasMany(models.product, { foreignKey: 'product_id' });
  };

  return salesProduct;
};
