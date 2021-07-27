const sales_products = (sequelize, DataTypes) => {
  const sales_products = sequelize.define('sales_products', {
    sale_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
  },{
    timestamps: false
  }
);

sales_products.associate = (models) => {
  models.sale.belongsToMany(models.product,{
    as: "productId",
    through: sales_products,
    foreignKey: "sale_id",
    otherKey: "product_id",
  });
  models.product.belongsToMany(models.sale,{
    as: "saleId",
    through: sales_products,
    foreignKey: "product_id",
    otherKey: "sale_id",
  })
};

return sales_products;
}

module.exports = sales_products;