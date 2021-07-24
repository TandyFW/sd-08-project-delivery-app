module.exports = {
  up: async (queryInterface, Sequelize) => {
    const sales = queryInterface.createTable("sales", {
      id:{
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      user_id:{
        type: Sequelize.INTEGER,
        // references: {
        //   model: "users",
        //   key: "id"
        // }
      },
      seller_id:{
        type: Sequelize.INTEGER,
        // unique:true,
        // references: {
        //   model: "users",
        //   key: "id"
        // }
      },
      total_price:{
        allowNull: false,
        type: Sequelize.INTEGER,
      },
      delivery_address:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      delivery_number:{
        allowNull: false,
        type: Sequelize.STRING,
      },
      sales_date:{
        allowNull: false,
        type: Sequelize.DATE,
      },
      status:{
        allowNull: false,
        type: Sequelize.STRING,
      }
    })
    return sales;
  },

  down: async (queryInterface, Sequelize) => {
    queryInterface.dropTable("sales");
  }
};

// A Solução para usarmos duas Foreign Key em uma mesma tabela foi inspirada nesse link do SW
// https://stackoverflow.com/questions/43523203/two-foreign-key-of-same-table-in-one-table-in-sequelize
