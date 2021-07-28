const { sales, products, users } = require('../database/models');

const orderDetails = async (req, res) => {
  const { id } = req.params;
  try {
    const result = await sales.findOne({ 
      where: { id },
      include: [{ model: products, as: 'products' },
    ] });
    const sellerUser = await users.findOne({
      where: { id: result.sellerId },
    });
    const resultAll = { 
      result, 
      user: sellerUser.dataValues,
    };
    if (resultAll) return res.status(201).json(resultAll);
    if (!resultAll) return res.status(404).send('Not found');
  } catch (err) {
    return res.status(409).json(err);
  }
};

const orderStatusUpdate = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  try {
    await sales.update({
       status },
      { where: { id },
    });
    const result = await sales.findOne({
      where: { id },
    });
    return res.status(200).json(result);
  } catch (err) {
    res.status(409).json(err);
  }
}

module.exports = {
  orderDetails,
  orderStatusUpdate,
}