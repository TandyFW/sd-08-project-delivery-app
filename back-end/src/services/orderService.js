const registerSchema = require('../schemas/registerSchema');
const { sale, user } = require('../database/models');
const clientError = require('../utils/clientError');

const create = async (dataForCreate) => {
 // const { error } = registerSchema.create.validate(dataForCreate);
 // if (error) return clientError.badRequest(error.details[0].message);
  const { dataValues: { result } } = await sale.create(dataForCreate);
  return result;
};

const getAll = () => sale.findAll();

const getById = async (id) => {
  const { error } = registerSchema.checkId.validate(id);
  if (error) return clientError.badRequest(error.details[0].message);
  
  try {
    const { dataValues: { password: _, ...result } } = await sale.findByPk(id);
    console.log(sale);
    return result;
  } catch (err) {
    return clientError.badRequest(`Not Found Id: ${id}`);
  }
};

const updateById = async (id, dataForUpdate) => {
  const { error } = registerSchema.updateById.validate(dataForUpdate);
  if (error) return clientError.badRequest(error.details[0].message);

  const { error: errorID } = registerSchema.checkId.validate(id);
  if (errorID) return clientError.badRequest(errorID.details[0].message);

  const checkFound = await getById(id);
  if (checkFound.error) return checkFound;

  const result = await sale.update({ ...dataForUpdate }, { where: { id } });
  if (!result[0]) return clientError.badRequest('Data is Already updated');

  return `Success Update Id: ${id}`;
};

const deleteById = async (id) => {
  const { error } = registerSchema.checkId.validate(id);
  if (error) return clientError.badRequest(error.details[0].message);

  const result = await sale.destroy({ whre: { id } });
  if (!result) return clientError.badRequest(`Not Found Id: ${id}`);
  return `Success Delete Id: ${id}`;
};

const getAllAll = async (id) => {
  const foundsale = await sale.findOne({
     where: { id },
     include:  {model: user, as: 'seller_id', through: { attributes: [] },}
    });
  return foundsale;
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
  getAllAll,
};