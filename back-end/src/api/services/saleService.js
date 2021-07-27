const { sales } = require('../../database/models');

const getAll = async () => {
  try {
    const allSales = await sales.findAll();
    return allSales;
  } catch (error) {
    return error.message;
  }

};

module.exports = {
  getAll,
};
