const sinon = require('sinon');
const { expect } = require('chai');

const registerController = require('../../api/controllers/registerController');
const { userMockDBResponse, userMockDB } = require('../__mocks__/userMock');

describe('Register Controller', () => {
  describe('When user is register with success', () => {
    const response = {};
    const request = {};

    before(() => {
      request.body = {
        name: userMockDB.name,
        email: userMockDB.email,
        role: userMockDB.role
      };
      request.token = userMockDBResponse.token;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(userMockDBResponse);
    });

    it('should return status 201 and a json message', async () => {
      await registerController.userRegister(request, response);

      expect(response.status.calledWith(201)).to.be.equal(true);
      expect(response.json.calledWith(userMockDBResponse)).to.be.equal(true);
    });
  });
});
