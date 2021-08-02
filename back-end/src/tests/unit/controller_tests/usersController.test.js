const sinon = require('sinon');
const { expect } = require('chai');

const usersController = require('../../../api/controllers/usersController');
const { user } = require('../../../database/models');
const { userCustomerAndSeller, userSellerMockDB } = require('../../__mocks__/userMock');

describe('Users Controller', () => {
  describe('When get users Seller', () => {
    const response = {};
    const request = {};
    const sellerResponse = { sellers: [userSellerMockDB] }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(sellerResponse);

      sinon.stub(user, 'findOne')
        .resolves([userSellerMockDB]);
    });
    afterEach(() => {
      user.findOne.restore();
    });

    it('should return status 200 and a json message', async () => {
      const result = await usersController.getAllSellers(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(sellerResponse);
    });
  });

  describe('When get users Customer and Seller', () => {
    const response = {};
    const request = {};
    const userDBResponse = { user: userCustomerAndSeller }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(userDBResponse);

      sinon.stub(user, 'findAll')
        .resolves(userDBResponse);
    });
    afterEach(() => {
      user.findAll.restore();
    });

    it('should return status 200 and a json message', async () => {
      const result = await usersController.getCustomerAndSellers(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(userDBResponse);
    });
  });

});
