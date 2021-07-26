const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProducts",
  {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false
  });

  salesProduct.associate = (models) => {
    models.sales.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
    models.products.belongsToMany(models.products, {
      as: 'products',
      through: salesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
  }

  return salesProduct;
}

module.exports = salesProduct;
