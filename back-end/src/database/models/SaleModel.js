function afterCreate() {
  return (sale) => {
    const { productsList, id } = sale;
    const promiseArray = productsList.map((product) => (
      sale.sequelize.models.SaleProducts.create({
        saleId: id,
        productId: product.id,
        quantity: product.qty,
      })
    ));
    return Promise.all(promiseArray);
  };
}

// eslint-disable-next-line max-lines-per-function
const Sale = (sequelize, DataTypes) => {
  const sale = sequelize.define('Sale', {
    userId: { type: DataTypes.INTEGER, foreignKey: true },
    sellerId: { type: DataTypes.INTEGER, foreignKey: true },
    totalPrice: DataTypes.DECIMAL(10, 2),
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: DataTypes.DATE,
    status: DataTypes.STRING,
    productsList: DataTypes.VIRTUAL,
  },
  {
    timestamps: false,
    tableName: 'sales',
    underscored: true,
    // https://sequelize.org/v5/manual/hooks.html
    hooks: { afterCreate: afterCreate() },
  });
  
  sale.associate = (models) => {
    sale.belongsTo(models.User,
      { foreignKey: 'userId', as: 'client' });
    sale.belongsTo(models.User,
      { foreignKey: 'sellerId', as: 'seller' });
  };

  return sale;
};

module.exports = Sale;