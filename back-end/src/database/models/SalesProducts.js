module.exports = (sequelize, DataTypes) => {
  const SalesProduct = sequelize.define(
    'SalesProduct',
    {
      quantity: DataTypes.STRING,
    },
    { timestamps: false }
  );

  SalesProduct.associate = (models) => {
    models.Sale.belongsToMany(models.Product, {
      as: 'products',
      through: SalesProduct,
      foreignKey: 'sale_id',
      otherKey: 'product_id',
    });
    models.Product.belongsToMany(models.Sale, {
      as: 'sales',
      through: SalesProduct,
      foreignKey: 'product_id',
      otherKey: 'sale_id',
    });
  };

  return SalesProduct;
};
