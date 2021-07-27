module.exports = (sequelize, DataTypes) => {
  const salesProduct = sequelize.define('salesProduct', {
    sale_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'sale',
        key: 'id'
      }
    },
    product_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'product',
        key: 'id'
      }
    },
    quantity: DataTypes.STRING
  },
  {
    timestamps: false,
    underscored: true,
    setterMethods: {
      saleId: function (v) { this.setDataValue("sale_id", v); },
      productId: function (v) { this.setDataValue("product_id", v); },
    }
  });

  salesProduct.associate = (models) => {
    salesProduct.belongsTo(models.sale);
    salesProduct.belongsTo(models.product);
  }

  return salesProduct;
};
