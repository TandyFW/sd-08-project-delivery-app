const SaleProduct = (sequelize, DataTypes) => {
  const SaleProducts = sequelize.define('SalesProducts', {}, {
    timestamps: false,
    tableName: 'SalesProducts'
  });

  SaleProducts.associate = (models) => {
    models.Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: SaleProducts,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
    models.Sales.belongsToMany(models.Products, {
      as: 'products',
      through: SaleProducts,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
  };

  return SaleProducts;
};

module.exports = SaleProduct;