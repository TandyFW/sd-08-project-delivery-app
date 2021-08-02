const formatSaleRes = require('../utils/formatSaleRes');
const { badRequest } = require('@hapi/boom');
const { User, Product, Sale, SaleProduct, sequelize } = require('../database/models');

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
        return saleId;
    } catch (err) {
        await t.rollback();
        throw badRequest(err);
    }
};

const getSales = async () => {
    const allSales = await Sale.findAll({ attributes: ['id',
    'sale_date', 'status', 'total_price', 'delivery_address', 'delivery_number'],
        include: [
            { model: User,
                as: 'user',
                attributes: ['id', 'name', 'email', 'role'] },
            { model: User, 
                as: 'seller',
                attributes: ['id', 'name', 'email', 'role'] },
            { model: SaleProduct,
                as: 'sales_products',
                include: [{ model: Product, 
                    as: 'product',
                    attributes: ['id', 'name'] }],
                attributes: ['quantity'] }],
    });
    return { sales: allSales };
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
