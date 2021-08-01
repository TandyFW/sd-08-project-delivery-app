const sinon = require('sinon');
const { expect } = require('chai');

const { userNameDataValidation } = require('../../../api/middlewares');

describe('User name data validation middleware', () => {
  let response = {};
  let request = {};

  describe('When data is validated with success', () => {
    it('should call next function', async () => {
      request = { body: { name: 'Example Name User' } };
      const nextSpy = sinon.spy();

      userNameDataValidation(request, response, nextSpy);

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

    it('should return a status 400 and a message when the name field is empty', async () => {
      const errorMessage = { message: '"name" must not be emppty' };
      request = { body: { name: '' } };
      response.send = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      userNameDataValidation(request, response, nextSpy);

      expect(response.status.calledWith(400)).to.be.equal(true);
      expect(response.send.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });

    it('should return a status 400 and a message when the name is less than 12 characters', async () => {
      const errorMessage = { message: '"name" length must be 12 characters long' };
      request = { body: { name: 'Example' } };
      response.send = sinon.stub().returns(errorMessage);
      const nextSpy = sinon.spy();

      userNameDataValidation(request, response, nextSpy);

      expect(response.status.calledWith(400)).to.be.equal(true);
      expect(response.send.calledWith(errorMessage)).to.be.equal(true);
      expect(nextSpy.calledOnce).to.be.equal(false);
    });
  });
});
