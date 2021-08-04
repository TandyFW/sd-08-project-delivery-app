// const moment = require('moment');

const sale = (sequelize, DataTypes) => {
  const SaleTable = sequelize.define("sale", {
    totalPrice: DataTypes.DECIMAL,
    deliveryAddress: DataTypes.STRING,
    deliveryNumber: DataTypes.STRING,
    saleDate: { type: DataTypes.DATE, defaultValue: new Date() },
    status: DataTypes.STRING,
  }, { 
    timestamps: false,
    // para indicar que as referências de campos e tabelas são em snake_case 
    // underscored: true
  });

  SaleTable.associate = (models) => {
    SaleTable.belongsTo(models.user,
  { onDelete: 'CASCADE', foreignKey: 'userId', as: 'user' },
  );
  SaleTable.belongsTo(models.user,
    { onDelete: 'CASCADE', foreignKey: 'sellerId', as: 'seller' }
    );
  };
  return SaleTable;
};

module.exports = sale;
