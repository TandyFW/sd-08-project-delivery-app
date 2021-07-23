module.exports = (sequelize, DataTypes) => {
  const sales = sequelize.define('sales', {
    user_id: DataTypes.INTEGER,
    seller_id: DataTypes.INTEGER,
    total_price: DataTypes.DECIMAL(9,2),
    delivery_address: DataTypes.STRING(100),
    delivery_number: DataTypes.STRING(50),
    sales_data: DataTypes.DATE,
    status: DataTypes.STRING(50),
  },
  {
    timestamps: false,
    tableName: 'sales',
  });
  // user.associate = (models) => {
  //   user.belongsTo(models.user, { foreignKey: 'id', as: 'user_id' });
  //   user.belongsTo(models.user, { foreignKey: 'id', as: 'seller_id' });
  // };
  return sales;
};

// A Solução para usarmos duas Foreign Key em uma mesma tabela foi inspirada nesse link do SW
// https://stackoverflow.com/questions/43523203/two-foreign-key-of-same-table-in-one-table-in-sequelize
