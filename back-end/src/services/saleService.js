const { conflict } = require('@hapi/boom');
const formatSaleRes = require('../utils/formatSaleRes');
const { Sale, SaleProduct, sequelize, Product, User } = require('../database/models');

const createSale = async (sale, t) => {
    const { userId, sellerId, totalPrice,
        deliveryAddress, deliveryNumber } = sale;

        const saleDate = Date(Date.UTC());
        const status = 'Pendente';

    const saleInsert = await Sale.create({ 
        userId,
        sellerId,
        totalPrice,
        deliveryAddress, 
        deliveryNumber,
        saleDate,
        status,
     }, { transaction: t });

    const saleId = saleInsert.dataValues.id;
    return saleId;
};

const saveSale = async (sale) => {
    const t = await sequelize.transaction();
    try {
    const saleId = await createSale(sale, t);
     sale.products.forEach(async ({ id: productId, quantity }) => {
           await SaleProduct.create({
                saleId,
                productId,
                quantity,            
            });
        }, { transaction: t });

        await t.commit();
    } catch (err) {
        await t.rollback();
        throw conflict(err);
    }
};

const getSales = async () => {
    const sales = await Sale.findAll({
        attributes: ['status', 'total_price', 'sale_date'],
      });

      return sales;
};

const getSaleById = async (id) => {
    const sale = await Sale.findOne({
        where: { id },
        attributes: { 
          exclude: ['user_id', 'seller_id'],
        },
        include: [{ model: Product,
        as: 'Products',
        through: { attributes: [] },
        attributes: { exclude: ['user_id'] },
        include: [{ model: SaleProduct,
        attributes: ['quantity'] },
        ],
        },
        { model: User, as: 'customer', attributes: { exclude: ['password'] } }, 
        { model: User, as: 'seller', attributes: { exclude: ['password'] } }, 
      ], 
    }).then(formatSaleRes);
    return { sales: sale };
};

module.exports = {
    saveSale,
    getSales,
    getSaleById,
};
