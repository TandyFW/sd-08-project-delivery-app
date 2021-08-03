const sinon = require('sinon');
const { expect } = require('chai');

const usersController = require('../../../api/controllers/usersController');
const { user } = require('../../../database/models');
const { userCustomerAndSeller, userSellerMockDB } = require('../../__mocks__/userMock');

describe('Users Controller', () => {
  let response = {};
  let request = {};

  describe('When get users Seller', () => {
    const sellerResponse = { sellers: [userSellerMockDB] }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(sellerResponse);

      sinon.stub(user, 'findOne')
        .resolves([userSellerMockDB]);
    });
    afterEach(() => {
      user.findOne.restore();
      response = {};
      request = {};
    });

    it('should return status 200 and a json message', async () => {
      const result = await usersController.getAllSellers(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(sellerResponse);
    });
  });

  describe('When get all users Customer and Seller', () => {
    const userDBResponse = { user: userCustomerAndSeller }

    before(() => {
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(userDBResponse);

      sinon.stub(user, 'findAll')
        .resolves(userDBResponse);
    });
    afterEach(() => {
      user.findAll.restore();
      response = {};
      request = {};
    });

    it('should return status 200 and a json message', async () => {
      const result = await usersController.getCustomerAndSellers(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(result).to.be.equal(userDBResponse);
    });
  });

  describe('When remove a user by admin', () => {
    let removeDBResponse;

    afterEach(() => {
      user.destroy.restore();
      response = {};
      request = {};
    });

    it('should return status 204 and a json message when success', async () => {
      request = { params: { id: 4 } };
      removeDBResponse = { message: 'User 4 deleted!' };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(removeDBResponse);

      sinon.stub(user, 'destroy')
        .resolves(1);

      const result = await usersController.removeUser(request, response);

      expect(response.status.calledWith(204)).to.be.equal(true);
      expect(result).to.be.equal(removeDBResponse);
    });

    it('should return status 500 and a json message when fails', async () => {
      request = { params: { id: 4 } };
      removeDBResponse = { message: 'User not deleted!' };
      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(removeDBResponse);

      sinon.stub(user, 'destroy')
        .resolves(0);

      const result = await usersController.removeUser(request, response);

      expect(response.status.calledWith(500)).to.be.equal(true);
      expect(result).to.be.equal(removeDBResponse);
    });
  });

});
