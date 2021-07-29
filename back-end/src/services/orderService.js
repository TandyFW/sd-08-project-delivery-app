const registerSchema = require('../schemas/registerSchema');
const { sale/* , salesProducts, */, product } = require('../database/models');
const clientError = require('../utils/clientError');

const createOrder = async (dataForCreate) => {
  const result = await sale.create(dataForCreate);
  return result;
};

const getAllOrders = () => sale.findAll();

const getOrderById = async (id) => {
  const { error } = registerSchema.checkId.validate(id);
  if (error) return clientError.badRequest(error.details[0].message);

  try {
    const { dataValues: { password: _, ...result } } = await sale.findByPk(id);
    return result;
  } catch (err) {
    return clientError.badRequest(`Not Found Id: ${id}`);
  }
};

const getAllOrdersByUserId = async (id) => {
  const userId = 'user_id'; // Miau para quem fez essa regra =)
  const foundSales = await sale.findAll({
    where: { [userId]: id },
    attributes: { exclude: ['seller_id', 'user_id'] }, // exclui o order
    include: [{
      attributes: { exclude: [''] }, /* exclui o product */
      model: product,
      as: 'productId',
      required: false,
      through: { 
        attributes: { exclude: ['sale_id', 'product_id'] }, // exclui o salesProducts
      },
    }],
  });

  return foundSales;
};

getAllOrdersByUserId('1').then((data) => console.log(data));

// getById('1').then(console.log);

module.exports = {
  createOrder,
  getAllOrders,
  getOrderById,
  getAllOrdersByUserId,
  // getAllAll,
};

// const { error } = registerSchema.create.validate(dataForCreate);
// if (error) return clientError.badRequest(error.details[0].message);
// // include: [{model: sale, as: 'saleId' }, { model: product, as: 'productId' }],
