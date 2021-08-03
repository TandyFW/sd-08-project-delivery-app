const { salesProducts } = require('../services/SalesProduct');

const findAllSales = async (req, res) => {

    try {
      const { name } = req.body;
      const getAllBySeller = await salesProducts(name);

      return res.status(200).json(getAllBySeller);
    } catch(e) { return res.status(404).json(e.message) }
};

module.exports = {
  findAllSales,
};
