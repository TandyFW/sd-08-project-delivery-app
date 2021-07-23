const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProduct",
  {
    quantity: DataTypes.INTEGER
  },
  {
    timestamps: false
  });

  salesProduct.associate = (models) => {
    models.salesProduct.belongsToMany(models.sale, {
      as: 'sale',
      through: salesProduct,
      foreignKey: 'products_id',
      otherKey: 'sales_id'
    });
    models.salesProduct.belongsToMany(models.product, {
      as: 'product',
      through: salesProduct,
      foreignKey: 'sales_id',
      otherKey: 'products_id'
    });
  }

  return salesProduct;
}

module.exports = salesProduct;