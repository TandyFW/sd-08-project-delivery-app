const product = (sequelize, DataTypes) => {
  const ProductTable = sequelize.define("product", {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    urlImage: DataTypes.STRING,
  }, { timestamps: false });

  ProductTable.associate = (models) => {
    ProductTable.hasMany(models.SaleProduct,
    { foreignKey: 'productId', as: 'salesProducts' });
    ProductTable.hasMany(models.Sale,
      { foreignKey: 'saleId', as: 'sales' });
};
  return ProductTable;
};

module.exports = product;
