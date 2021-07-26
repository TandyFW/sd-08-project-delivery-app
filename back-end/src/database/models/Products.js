const Products = (sequelize, DataTypes) => {
  const products = sequelize.define("products", {
    name: {
      type: DataTypes.STRING,
      notNull: true,
    },
    price: {
      type: DataTypes.INTEGER,
      notNull: true,
    },
    urlImage: {
      type: DataTypes.STRING,
      notNull: true,
    },
  });

  return products;
};

module.exports = Products;