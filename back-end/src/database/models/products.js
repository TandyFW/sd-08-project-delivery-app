const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    name:  DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    urlImage: DataTypes.STRING,
  }, { tableName: 'products', timestamps: false});

  return Products;
};

module.exports = Products;