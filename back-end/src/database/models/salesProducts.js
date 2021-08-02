const saleProduct = (sequelize, DataTypes) => {
  const saleProducts = sequelize.define('salesProducts', {
    quantity: DataTypes.INTEGER,
  }, {
    timestamps: false,
    tableName: 'salesProducts'
  });

  saleProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: saleProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: saleProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return saleProducts;
};

module.exports = saleProduct;
