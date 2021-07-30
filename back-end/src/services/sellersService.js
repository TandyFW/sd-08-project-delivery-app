const { users } = require('../database/models');

const getIdAndName = ({ id, name }) => ({ id, name }); 
const getManyIdsAndNames = (sellers) => sellers.map(getIdAndName);

const findAllSellers = async () => {
  const allSellers = await users.findAll({ where: { role: 'seller' } });
  const sellers = getManyIdsAndNames(allSellers);
  return sellers;
};

module.exports = {
  findAllSellers,
};
