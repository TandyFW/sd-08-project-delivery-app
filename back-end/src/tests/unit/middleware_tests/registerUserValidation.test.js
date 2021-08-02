const sinon = require('sinon');
const { expect } = require('chai');
const md5 = require('md5');

const { user } = require('../../../database/models');
const { registerUserValidation } = require('../../../api/middlewares');

describe('User Register validation middleware', () => {
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
      sinon.stub(user, 'findOne').resolves(null);
      sinon.stub(user, 'create').resolves(userMock);

    });
    afterEach(() => {
      user.findOne.restore();
      user.create.restore();
    });

    it('should call next function', async () => {
      request = { body: { name: 'Example Name User', email: 'example@example.com', password: 'password' } };
      const nextSpy = sinon.spy();

      await registerUserValidation(request, response, nextSpy);

      expect(nextSpy.calledOnce).to.be.equal(true);

      response = {};
      request = {};
    });
  });

  describe('When register is not created', () => {
    beforeEach(async () => {
      response.status = sinon.stub().returns(response);
    });
    afterEach(() => {
      user.findOne.restore();
      user.create.restore();
      response = {};
      request = {};
    });

    it('should return a status 409 and a user is already registered', async () => {
      sinon.stub(user, 'findOne').callsFake(() => userMock);
      sinon.stub(user, 'create').resolves({});
      const errorMessage = { message: 'User already registered!' };
      request = { body: { name: 'Example Name User', email: 'example@example.com', password: 'password' } };
      response.json = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      await registerUserValidation(request, response, nextSpy);

      expect(response.status.calledWith(409)).to.be.equal(true);
      expect(response.json.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });
  });
});
