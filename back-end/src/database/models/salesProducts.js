module.exports = (sequelize, _DataTypes) => {
  const SalesProducts = sequelize.define('SalesProducts',
    {},
    { timestamps: false },
  );

  SalesProducts.associate = (models) => {
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProducts,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProducts,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
  };

  return SalesProducts;
};