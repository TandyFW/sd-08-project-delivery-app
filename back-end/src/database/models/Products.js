const Products = (sequelize, DataTypes) => {
  const products = sequelize.define(
    "products",
    {
      name: {
        type: DataTypes.STRING,
        notNull: true,
      },
      price: {
        type: DataTypes.DECIMAL,
        notNull: true,
      },
      urlImage: {
        type: DataTypes.STRING,
        notNull: true,
      },
    },
    { underscored: true, tableName: "products" }
  );

  return products;
};

module.exports = Products;
