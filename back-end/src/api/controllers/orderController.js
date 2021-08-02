// Controller para os pedidos de vendas. Criação, leitura e atualização.

const {
  createSaleOrder,
  createSaleProductOrder,
  getSaleById,
  getUserById,
  getAllOrdersByUser,
  getDetailOrdersByUserId,
  updateOrder,
} = require('../services');

/*  Para a criação dos pedidos usando os seguintes atributos:
    --> userId, sellerId, totalPrice, deliveryAddress, deliveryNumber, saleDate, status <--
    Fazendo a associação com a tabela de produtos pela tabela 'salesProducts'.
    Retorna os dados completos da venda. */

const createOrder = async (req, res) => {
  const saleOrder = await createSaleOrder(req.body);

  const saleId = saleOrder.id;
  const { products } = req.body;

  await createSaleProductOrder({ saleId, products });

  const result = await getSaleById(saleId);
  return res.status(201).json({ sale: result });
};

/*  Para a leitura de todos os pedidos de um usuário especifico.
    Usuário identificado pelo token gerado no login/registro. */

const getAllOrders = async (req, res) => {
  const { id } = req.tokenData;

  const { role } = await getUserById(id);

  const result = await getAllOrdersByUser(id, role);

  return res.status(200).json({ sale: result });
};

/*  Para a leitura de um pedido especifico.
    Usuário identificado pelo token e pedido pelo ID no parametro na Url
    Retorna dados apenas da tabela 'sales' */

const getOrder = async (req, res) => {
  const { id } = req.tokenData;
  const saleId = req.params.id;
  const { role } = await getUserById(id);

  const [result] = await getDetailOrdersByUserId(id, role, saleId);

  return res.status(200).json(result);
};

/*  Para atualização do estatus do pedido.
    Pedido identificado pelo ID no parametro na Url e o 'status' pela query na Url */

const updateOrderStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.query;

  const result = await updateOrder(id, status);

  return res.status(200).json({ sale: result });
};

module.exports = { createOrder, getAllOrders, getOrder, updateOrderStatus };
