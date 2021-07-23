module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('users',
      [{
        name: 'Lewis Hamilton',
        email: 'lewishamilton@gmail.com',
        password: '123456',
        role: 'user',
      },
      {
        name: 'Michael Schumacher',
        email: 'MichaelSchumacher@gmail.com',
        password: '123456',
        role: 'user',
      },
      {
        name: 'Pessoa Vendedora',
        email: 'seller@gmail.com',
        password: '123456',
        role: 'seller',
      },
      {
        name: 'User Required',
        email: 'zebirita@email.com',
        password: '$#zebirita#$',
        role: 'user',
      },
      {
        name: 'Pessoa Administradora',
        email: 'seller@gmail.com',
        password: '123456',
        role: 'administrador',
      }], { timestamps: false }
    );
  },

  down: async (queryInterface, _Sequelize) => {
    await queryInterface.bulkDelete('users', null, {});
  }
};
