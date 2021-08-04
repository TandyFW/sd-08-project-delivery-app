const saleProduct = (sequelize, DataTypes) => {
  const saleProducts = sequelize.define('salesProducts', {
    quantity: DataTypes.INTEGER,
  }, {
    underscored: true,
    timestamps: false,
    tableName: 'salesProducts'
  });

  saleProducts.associate = (models) => {
    models.products.belongsToMany(models.sales, {
      as: 'sales',
      through: saleProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.sales.belongsToMany(models.products, {
      as: 'products',
      through: saleProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return saleProducts;
};

module.exports = saleProduct;
