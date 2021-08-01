const sinon = require('sinon');
const { expect } = require('chai');

const { tokenGeneration } = require('../../../api/middlewares');

describe('Token generation middleware', () => {
  let response = {};
  let request = {};

  describe('When a token is generated', () => {
    it('should call next function', async () => {
      request = { body: { id: 1, email: 'example@example.com' }, token: '' };
      const nextSpy = sinon.spy();

      tokenGeneration(request, response, nextSpy);

      expect(nextSpy.calledOnce).to.be.equal(true);

      response = {};
      request = {};
    });
  });
});
