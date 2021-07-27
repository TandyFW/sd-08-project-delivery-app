'use strict';

module.exports = {
  up: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkInsert('sales', [
    //   {
    //     id: 1,
    //     userId: 1,
    //     sellerId: 4,
    //     totalPrice: 11.17,
    //     deliveryAddress: 'Quadra 207 Norte Alameda',
    //     deliveryNumber: '110',
    //     salesDate: new Date(),
    //     status: 'PENDENTE',
    //   },
    //   {
    //     id: 2,
    //     userId: 2,
    //     sellerId: 4,
    //     totalPrice: 30.00,
    //     deliveryAddress: 'Rua Antônio Lisboa da Cruz',
    //     deliveryNumber: '99',
    //     salesDate: new Date(),
    //     status: 'PREPARANDO',
    //   },
    //   {
    //     id: 3,
    //     userId: 3,
    //     sellerId: 5,
    //     totalPrice: 19.40,
    //     deliveryAddress: 'Rua dos Pioneiros',
    //     deliveryNumber: '1230',
    //     salesDate: new Date('2021-07-20 20:00:00'),
    //     status: 'ENTREGUE',
    //   },
    ], { timestamps: false });
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('sales', {});
  }
};
