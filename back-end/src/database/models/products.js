const Product = (sequelize, DataTypes) => {
  const Products = sequelize.define('Products', {
    name: DataTypes.STRING,
    price: DataTypes.DECIMAL,
    url_image: DataTypes.STRING,
  }, {
    timestamps: false,
  });

  return Products;
};

module.exports = Product;