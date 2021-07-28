const salesProduct = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define("salesProducts",
  {
    quantity: DataTypes.INTEGER,
  },
  {
    timestamps: false,
  });

  salesProduct.associate = (models) => {
    models.sales.belongsToMany(models.sales, {
      as: 'sales',
      through: salesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id'
    });
    models.products.belongsToMany(models.products, {
      as: 'products',
      through: salesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id'
    });
  }

  return salesProduct;
}

module.exports = salesProduct;
