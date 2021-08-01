const sinon = require('sinon');
const { expect } = require('chai');

const { orderInfoHandler } = require('../../../api/middlewares');

describe('Order info handler', () => {
  let response = {};
  let request = {};

  beforeEach(() => {

  })

  describe('Order info handler middleware', () => {
    it('should call next function', async () => {
      request = { tokenData: { id: 1 }, body: {} };
      const nextSpy = sinon.spy();

      orderInfoHandler(request, response, nextSpy);

      expect(nextSpy.calledOnce).to.be.equal(true);
      expect(request.body).to.have.property('userId');
      expect(request.body).to.have.property('saleDate');
      expect(request.body).to.have.property('status');

      response = {};
      request = {};
    });
  });

});
