const sinon = require('sinon');
const { expect } = require('chai');

const orderController = require('../../api/controllers/orderController');
const services = require('../../api/services');

const {
  orderCreateRequest,
  saleCreateResponse,
  saleProductCreateResponse,
  saleByIdResponse,
  orderResponse,
} = require('../__mocks__/ordersMocks');

describe('Orders Controller', () => {
  describe('When create an order objectwith success', () => {
    const response = {};
    const request = {};

    before(() => {
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
    after(() => {
      services.createSaleOrder.restore();
      services.createSaleProductOrder.restore();
      services.getSaleById.restore();
    });
    it('should return status 200 and a json message', async () => {
      const result = await orderController.createOrder(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
      expect(result).to.be.equal(orderResponse);
    });
  });

});
