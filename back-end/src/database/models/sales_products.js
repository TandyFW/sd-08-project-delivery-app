module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    saleId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'sale',
        key: 'id'
      }
    },
    productId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quantity: DataTypes.STRING
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'sales_products'
  });

  salesProduct.associate = (models) => {
    salesProduct.belongsTo(models.sale);
    salesProduct.belongsTo(models.product);
  }

  return salesProduct;
};
