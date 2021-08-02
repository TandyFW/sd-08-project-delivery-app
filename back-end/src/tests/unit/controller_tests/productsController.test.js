const sinon = require('sinon');
const { expect } = require('chai');

const productsController = require('../../../api/controllers/productsController');
const { product } = require('../../../database/models');
const { productsMockDB, productsMockDBResponse, productByIdMockDB, productByIdMockDBResponse } = require('../../__mocks__/productsMock');

describe('Products Controller', () => {
  describe('When get all products with success', () => {
    const response = {};
    const request = {};

    beforeEach(async () => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(productsMockDBResponse);

      sinon.stub(product, 'findAll')
        .resolves(productsMockDB);
    });
    afterEach(() => {
      product.findAll.restore();
    });

    it('should return status 200 and a json message', async () => {
      const result = await productsController.getAll(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(productsMockDBResponse);
    });
  });

  describe('When get a product by Id with success', () => {
    const response = {};
    const request = {};

    beforeEach(() => {
      request.params = { id: 7 };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(productByIdMockDBResponse);

      sinon.stub(product, 'findOne')
        .resolves(productByIdMockDB);
    });
    afterEach(() => {
      product.findOne.restore();
    });

    it('should return status 200 and a json message', async () => {
      const result = await productsController.getById(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(productByIdMockDBResponse);
    });
  });
});
