

const getAllSales = async (req, res) => {
  console.log('oi');
  // const response = await sales.findAll();
  res.status(200).json({ response: 'oi!' });
};

module.exports = {
  getAllSales,
}
