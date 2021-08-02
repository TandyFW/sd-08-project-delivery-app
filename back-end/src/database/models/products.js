const Products = (sequelize, DataTypes) => {
  const Products = sequelize.define("Products", {
    name:  DataTypes.STRING,
    price: DataTypes.DECIMAL(4,2),
    url_image: DataTypes.STRING,
  }, { underscored: true, tableName: 'products', timestamps: false});

  return Products;
};

module.exports = Products;