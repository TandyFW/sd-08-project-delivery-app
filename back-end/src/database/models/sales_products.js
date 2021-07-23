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
    salesProduct.hasOne(models.sale, { as: 'saleId', foreignKey: 'sale_id' });
    salesProduct.hasMany(models.product, { as: 'productId', foreignKey: 'product_id' });
  };

  return salesProduct;
};
