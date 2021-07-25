const userSchema = require('../schemas/userSchema');
const { User } = require('../database/models');
const clientError = require('../utils/clientError');

const create = async (dataForCreate) => {
  const { error } = userSchema.create.validate(dataForCreate);
  if (error) return clientError.badRequest(error.details[0].message);

  const { dataValues: { password: _, ...result } } = await User.create(dataForCreate);
  return result;
};

const getAll = () => User.findAll();

const getById = async (id) => {
  const { error } = userSchema.checkId.validate(id);
  if (error) return clientError.badRequest(error.details[0].message);

  try {
    const { dataValues: { password: _, ...result } } = await User.findByPk(id);
    return result;
  } catch (err) {
    return clientError.badRequest(`Not Found Id: ${id}`);
  }
};

const updateById = async (id, dataForUpdate) => {
  const { error } = userSchema.updateById.validate(dataForUpdate);
  if (error) return clientError.badRequest(error.details[0].message);

  const { error: errorID } = userSchema.checkId.validate(id);
  if (errorID) return clientError.badRequest(errorID.details[0].message);

  const checkFound = await getById(id);
  if (checkFound.error) return checkFound;

  const result = await User.update({ ...dataForUpdate }, { where: { id } });
  if (!result[0]) return clientError.badRequest('Data is Already updated');

  return `Success Update Id: ${id}`;
};

const deleteById = async (id) => {
  const { error } = userSchema.checkId.validate(id);
  if (error) return clientError.badRequest(error.details[0].message);

  const result = await User.destroy({ where: { id } });
  if (!result) return clientError.badRequest(`Not Found Id: ${id}`);
  return `Success Delete Id: ${id}`;
};

module.exports = {
  create,
  getAll,
  getById,
  updateById,
  deleteById,
};