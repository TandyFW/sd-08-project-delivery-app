const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProducts",
  {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
    underscored: true,
    tableName: 'salesProducts'
  });

  salesProduct.associate = (models) => {
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: salesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId'
    });
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId'
    });
  }

  return salesProduct;
}

module.exports = salesProduct;
