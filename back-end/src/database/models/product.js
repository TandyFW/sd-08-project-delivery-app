const product = (sequelize, DataTypes) => {
  const product = sequelize.define(
    "product",
    {
      name: DataTypes.STRING(100),
      price: DataTypes.DECIMAL(10, 2),
      urlImage: {
        type: DataTypes.STRING(255),
        field: "url_image",
      },
     },
     { timestamps : false }
  );

  return product;
};

module.exports = product;
