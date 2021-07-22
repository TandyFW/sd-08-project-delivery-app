module.exports = (sequelize, _DataTypes) => {
  const SalesProduct = sequelize.define(
    'SalesProduct',
    {
      id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
      quantity: { type: DataTypes.INTEGER },
    },
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
