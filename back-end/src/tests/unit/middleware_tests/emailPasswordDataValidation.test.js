const sinon = require('sinon');
const { expect } = require('chai');

const { emailPasswordDataValidation } = require('../../../api/middlewares');

describe('Email and Password data validation', () => {
  let response = {};
  let request = {};

  describe('When data is validated with success', () => {
    it('should call next function', async () => {
      request = { body: { email: 'example@example.com', password: 'password' } };
      const nextSpy = sinon.spy();

      emailPasswordDataValidation(request, response, nextSpy);

      expect(nextSpy.calledOnce).to.be.equal(true);

      response = {};
      request = {};
    });
  });

  describe('When data is not validated', () => {
    beforeEach(() => {
      response.status = sinon.stub().returns(response);
    });
    afterEach(() => {
      request = {};
      response = {};
    });

    it('should return a status 400 and a message when the email field is empty', async () => {
      const errorMessage = { message: '"email" must not be emppty' };
      request = { body: { email: '', password: 'password' } };
      response.send = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      emailPasswordDataValidation(request, response, nextSpy);

      expect(response.status.calledWith(400)).to.be.equal(true);
      expect(response.send.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });

    it('should return a status 400 and a message when the password field is empty', async () => {
      const errorMessage = { message: '"password" must not be empty' };
      request = { body: { email: 'example@example.com', password: '' } };
      response.send = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      emailPasswordDataValidation(request, response, nextSpy);

      expect(response.status.calledWith(400)).to.be.equal(true);
      expect(response.send.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });

    it('should return a status 400 and a message when the email is not valid', async () => {
      const errorMessage = { message: '"email" must be a valid email' };
      request = { body: { email: 'exampleexample.com', password: 'password' } };
      response.send = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      emailPasswordDataValidation(request, response, nextSpy);

      expect(response.status.calledWith(400)).to.be.equal(true);
      expect(response.send.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });

    it('should return a status 400 and a message when the password is less then 6 characters', async () => {
      const errorMessage = { message: '"password" length must be 6 characters long' };
      request = { body: { email: 'example@example.com', password: 'pass' } };
      response.send = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      emailPasswordDataValidation(request, response, nextSpy);

      expect(response.status.calledWith(400)).to.be.equal(true);
      expect(response.send.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });
  });
});
