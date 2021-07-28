const saleServices = require('../services/saleService');

const saveSale = async (req, resp) => {
    // const { user_id, seller_id, total_price,
    //      address, delivery_number } = req.body;

    // console.log(req.body);
      await saleServices.saveSale(req.body);
};

module.exports = saveSale;