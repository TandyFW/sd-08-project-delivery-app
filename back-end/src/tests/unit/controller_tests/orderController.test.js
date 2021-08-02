const sinon = require('sinon');
const { expect } = require('chai');

const orderController = require('../../../api/controllers/orderController');
const { sale, user, salesProduct } = require('../../../database/models');

const {
  orderCreateRequest,
  saleCreateResponse,
  saleProductCreateResponse,
  saleByIdResponse,
  orderResponse,
  getAllOrdersMockDB,
  getAllOrdersMockDBResponse,
  updatedOrderStatusResponse,
} = require('../../__mocks__/ordersMocks');
const {
  userCustomerMockDB,
} = require('../../__mocks__/userMock')

describe('Orders Controller', () => {
  let response;
  let request;

  describe('When create an order object with success', () => {
    response = {};
    request = {};

    beforeEach(() => {
      request.body = orderCreateRequest;
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(orderResponse);

      sinon.stub(sale, 'create')
        .resolves(saleCreateResponse);
      sinon.stub(salesProduct, 'bulkCreate')
        .resolves(saleProductCreateResponse);
      sinon.stub(sale, 'findOne')
        .resolves(saleByIdResponse);
    });
    afterEach(() => {
      sale.create.restore();
      salesProduct.bulkCreate.restore();
      sale.findOne.restore();
    });
    it('should return status 201 and a json message', async () => {
      const result = await orderController.createOrder(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
      expect(result).to.be.equal(orderResponse);
    });
  });

  describe('When get all orders from a user with success', () => {
    response = {};
    request = {};

    beforeEach(() => {
      request = { tokenData: { id: 3, email: 'zebirita@email.com' } };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(getAllOrdersMockDBResponse);

      sinon.stub(user, 'findOne')
        .resolves(userCustomerMockDB);
      sinon.stub(user, 'findAll')
        .resolves(getAllOrdersMockDB);
    });
    afterEach(() => {
      user.findOne.restore();
      user.findAll.restore();
    });
    it('should return status 200 and a json message', async () => {
      const result = await orderController.getAllOrders(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(getAllOrdersMockDBResponse);
    });
  });

  describe('When get an order by Id with success', () => {
    response = {};
    request = {};

    beforeEach(() => {
      request = { tokenData: { id: 3, email: 'zebirita@email.com' }, params: { id: 1 } };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(saleByIdResponse);

      sinon.stub(user, 'findOne')
        .resolves(userCustomerMockDB);
      sinon.stub(sale, 'findAll')
        .resolves(saleByIdResponse);
    });
    afterEach(() => {
      user.findOne.restore();
      sale.findAll.restore();
    });
    it('should return status 200 and a json message', async () => {
      const result = await orderController.getOrder(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(saleByIdResponse);
    });
  });

  describe('When an order status is updated with success', () => {
    response = {};
    request = {};

    beforeEach(() => {
      request = { query: { status: 'Preparando' }, params: { id: 1 } };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(updatedOrderStatusResponse);

      sinon.stub(sale, 'update')
        .resolves();
      sinon.stub(sale, 'findOne')
        .resolves(userCustomerMockDB);
    });
    afterEach(() => {
      sale.update.restore();
      sale.findOne.restore();
    });
    it('should return status 200 and a json message', async () => {
      const result = await orderController.updateOrderStatus(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(updatedOrderStatusResponse);
    });
  });

});
