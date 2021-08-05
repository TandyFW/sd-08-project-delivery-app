const sinon = require('sinon');
const { expect } = require('chai');
const jwt = require('jsonwebtoken');
const fs = require('fs');

const secret = fs.readFileSync('jwt.evaluation.key', { encoding: 'utf-8' }).trim();

const { user } = require('../../../database/models');
const { tokenAdminValidation } = require('../../../api/middlewares');

describe('Token Admin validation middleware', () => {
  let response = {};
  let request = {};
  let authorization = '';
  const token = jwt.sign({ data: { id: 1, email: 'example@example.com'  } }, secret, { expiresIn: '1h', algorithm: 'HS256' });

  describe('When a token is validated with success', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
    })
    afterEach(() => {
      response = {};
      request = {};
      authorization = '';
    });

    it('should call next function', async () => {
      sinon.stub(user, 'findOne').callsFake(() => ({ id: 1, email: 'example@example.com', role: 'administrator' }));
      authorization = token;
      request = { headers: { authorization }, tokenData: '' };
      const nextSpy = sinon.spy();

      await tokenAdminValidation(request, response, nextSpy);

      expect(nextSpy.calledOnce).to.be.equal(true);

      user.findOne.restore();
    });

    it('should return a status 401 when a token is not found', async () => {
      authorization = null;
      request = { headers: { authorization } };
      const errorMessage = { message: 'Token not found' };
      response.json = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      await tokenAdminValidation(request, response, nextSpy);

      expect(response.status.calledWith(401)).to.be.equal(true);
      expect(response.json.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });

    it('should return a status 401 when is not a valid token', async () => {
      authorization = 'wrong-token';
      request = { headers: { authorization } };
      const errorMessage = { message: 'Expired or invalid token' };
      response.json = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      await tokenAdminValidation(request, response, nextSpy);

      expect(response.status.calledWith(401)).to.be.equal(true);
      expect(response.json.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });

    it('should return a status 403 when is an Unauthorized user', async () => {
      sinon.stub(user, 'findOne').resolves({ id: 1, email: 'example@example.com', role: 'customer' });
      authorization = token;
      request = { headers: { authorization } };
      const errorMessage = { message: 'Unauthorized user' };
      response.json = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      await tokenAdminValidation(request, response, nextSpy);

      expect(response.status.calledWith(403)).to.be.equal(true);
      expect(response.json.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);

      user.findOne.restore();
    });
  });
});
