const { sale, product } = require('../database/models');

const messageError = 'Algo deu errado';

// callback criadas para testes das associações
const getAllProductsSales = async (req, res) => {
  try {
    const data = await product.findAll({
      include: [
        { model: sale, as: 'sales', through: { attributes: [] } },
      ],
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};
// ----------------------------------------------------------------------

// CALLBACK VALIDAS
const getProducts = async (req, res) => {
  try {
    const data = await product.findAll({
      attributes: { exclude: ['sales'] },
    });
    return res.status(200).json(data);
  } catch (err) {
    return res.status(500).json({ message: messageError, err });
  }
};

module.exports = {
  // teste de associações
  getAllProductsSales,
  // --------------------
  // CALLBACK VALIDAS
  getProducts,
};