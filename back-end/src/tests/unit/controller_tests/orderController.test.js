const sinon = require('sinon');
const { expect } = require('chai');

const orderController = require('../../../api/controllers/orderController');
const services = require('../../../api/services');

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

      sinon.stub(services, 'createSaleOrder')
        .resolves(saleCreateResponse);
      sinon.stub(services, 'createSaleProductOrder')
        .resolves(saleProductCreateResponse);
      sinon.stub(services, 'getSaleById')
        .resolves(saleByIdResponse);
    });
    afterEach(() => {
      services.createSaleOrder.restore();
      services.createSaleProductOrder.restore();
      services.getSaleById.restore();
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

      sinon.stub(services, 'getUserById')
        .resolves(userCustomerMockDB);
      sinon.stub(services, 'getAllOrdersByUser')
        .resolves(getAllOrdersMockDB);
    });
    afterEach(() => {
      services.getUserById.restore();
      services.getAllOrdersByUser.restore();
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

      sinon.stub(services, 'getUserById')
        .resolves(userCustomerMockDB);
      sinon.stub(services, 'getOrderById')
        .resolves(saleByIdResponse);
    });
    afterEach(() => {
      services.getUserById.restore();
      services.getOrderById.restore();
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

      sinon.stub(services, 'updateOrder')
        .resolves(userCustomerMockDB);
    });
    afterEach(() => {
      services.updateOrder.restore();
    });
    it('should return status 200 and a json message', async () => {
      const result = await orderController.updateOrderStatus(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(updatedOrderStatusResponse);
    });
  });

});
