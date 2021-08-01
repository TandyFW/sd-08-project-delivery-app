const sinon = require('sinon');
const { expect } = require('chai');

const { getOrderById } = require('../../../api/services')
const { sale } = require('../../../database/models');
const { saleByIdResponse } = require('../../__mocks__/ordersMocks');

describe('Get order by id service', () => {
  let response = {};
  let id = 0;
  let role = '';
  let saleId = 0;

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    sinon.stub(sale, 'findAll').resolves(saleByIdResponse);
  });
  afterEach(() => {
    sale.findAll.restore()
    id = 0;
    role = '';
  });

  it('should return the customer order by Id', async () => {
    id = 3;
    role = 'customer';
    saleId = 1;

    const result = await getOrderById(id, role, saleId);

    expect(result).to.be.equal(saleByIdResponse);
  });

  it('should return the seller order by Id', async () => {
    id = 2;
    role = 'seller';
    saleId = 1;

    const result = await getOrderById(id, role, saleId);

    expect(result).to.be.equal(saleByIdResponse);
  });
});
