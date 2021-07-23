module.exports = (sequelize, _DataTypes) => {
  const SalesProduct = sequelize.define(
    'SalesProduct',
    { },
    { timestamps: false, tableName: 'salesProducts' },
  );

  SalesProduct.associate = models => {
    models.Sale.belongsToMany(models.Product, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'saleId',
      otherKey: 'productId',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'productId',
      otherKey: 'saleId',
    });
  };

  return SalesProduct;
};
