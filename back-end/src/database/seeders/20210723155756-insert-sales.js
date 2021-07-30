'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales', [
      {
        id: 1,
        user_id: 3,
        seller_id: 2,
        total_price: 11.17,
        delivery_address: 'Quadra 207 Norte Alameda',
        delivery_number: '110',
        sales_date: new Date(),
        status: 'PENDENTE',
      },
      {
        id: 2,
        user_id: 3,
        seller_id: 2,
        total_price: 30.00,
        delivery_address: 'Rua Antônio Lisboa da Cruz',
        delivery_number: '99',
        sales_date: new Date(),
        status: 'PREPARANDO',
      },
      {
        id: 3,
        user_id: 3,
        seller_id: 2,
        total_price: 19.40,
        delivery_address: 'Rua dos Pioneiros',
        delivery_number: '1230',
        sales_date: new Date('2021-07-20 20:00:00'),
        status: 'ENTREGUE',
      },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', {});
  }
};
