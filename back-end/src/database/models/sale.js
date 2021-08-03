const moment = require('moment');

const sale = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define("sale", {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: { type: DataTypes.DATE, defaultValue: moment.utc().format('L') },
    status: DataTypes.STRING,
  }, { 
    timestamps: false,
    // para indicar que as referências de campos e tabelas são em snake_case 
    underscored: true
  });

  SaleTable.associate = (models) => {
    SaleTable.belongsTo(models.user,
  { onDelete: 'CASCADE', foreignKey: 'user_id', as: 'user' },
  { onDelete: 'CASCADE', foreignKey: 'seller_id', as: 'user' }
  );
  };
  return SaleTable;
};

module.exports = sale;
