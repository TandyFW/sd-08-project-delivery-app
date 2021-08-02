const sinon = require('sinon');
const { expect } = require('chai');
const md5 = require('md5');

const { user } = require('../../../database/models');
const { loginUserValidation } = require('../../../api/middlewares');

describe('User Login validation middleware', () => {
  let response = {};
  let request = {};
  const userMock = {
    id: 1,
    name: 'Example Name User',
    email: 'example@example.com',
    password: md5('password'),
    role: 'customer'
  };

  describe('When user is validated with success', () => {
    beforeEach(async () => {
      response.status = sinon.stub().returns(response);
      sinon.stub(user, 'findOne').resolves(userMock);
    });
    afterEach(() => {
      user.findOne.restore();
    });

    it('should call next function', async () => {
      request = { body: { email: 'example@example.com', password: 'password' } };
      const nextSpy = sinon.spy();

      await loginUserValidation(request, response, nextSpy);

      expect(nextSpy.calledOnce).to.be.equal(true);

      response = {};
      request = {};
    });
  });

  describe('When user is not validated', () => {
    const userMock = {
      id: 1,
      name: 'Example Name User',
      email: 'example@example.com',
      password: md5('password'),
      role: 'customer'
    };

    beforeEach(async () => {
      response.status = sinon.stub().returns(response);
    });
    afterEach(() => {
      user.findOne.restore();
      response = {};
      request = {};
    });

    it('should return a status 404 and a message when the user is not found', async () => {
      sinon.stub(user, 'findOne').callsFake(() => null);
      const errorMessage = { message: 'User not found!' };
      request = { body: { email: 'example@example.com', password: 'password' } };
      response.json = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      await loginUserValidation(request, response, nextSpy);

      expect(response.status.calledWith(404)).to.be.equal(true);
      expect(response.json.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });

    it('should return a status 403 and a message when the password is incorrect', async () => {
      sinon.stub(user, 'findOne').resolves(userMock);
      const errorMessage = { message: 'Incorrect password!' };
      request = { body: { email: 'example@example.com', password: 'pa22w0rd' } };
      response.json = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      await loginUserValidation(request, response, nextSpy);

      expect(response.status.calledWith(403)).to.be.equal(true);
      expect(response.json.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });
  });
});
