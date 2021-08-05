const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    name:  DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING,
  }, { underscored: true, tableName: 'products', timestamps: false});

  Products.associate = (models) => {
    Products.belongsToMany(models.Sales, {
      as: 'sales',
      through: models.SalesProducts,
      foreignKey: 'productId',
      otherKey: 'saleId'
    })
  };

  return Products;
};

module.exports = Products;