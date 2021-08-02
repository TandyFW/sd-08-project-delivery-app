const sinon = require('sinon');
const { expect } = require('chai');

const loginController = require('../../../api/controllers/loginController');
const { userMockDBResponse, userMockDB } = require('../../__mocks__/userMock');

describe('Login Controller', () => {
  describe('When user is logged in with success', () => {
    const response = {};
    const request = {};

    beforeEach(() => {
      request.body = {
        name: userMockDB.name,
        email: userMockDB.email,
        role: userMockDB.role
      };
      request.token = userMockDBResponse.token;

      response.status = sinon.stub().returns(response);
      response.json = sinon.stub().returns(userMockDBResponse);
    });

    it('should return status 200 and a json message', async () => {
      await loginController.userLogin(request, response);

      expect(response.status.calledWith(200)).to.be.equal(true);
      expect(response.json.calledWith(userMockDBResponse)).to.be.equal(true);
    });
  });
});
