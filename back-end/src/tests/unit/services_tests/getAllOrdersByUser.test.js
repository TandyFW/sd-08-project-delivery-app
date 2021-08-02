const sinon = require('sinon');
const { expect } = require('chai');

const { getAllOrdersByUser } = require('../../../api/services')
const { sale } = require('../../../database/models');
const { getAllOrdersMockDB } = require('../../__mocks__/ordersMocks');

describe('Get all orders by the user service', () => {
  let response = {};
  let id = 0;
  let role = '';

  beforeEach(() => {
    response.status = sinon.stub().returns(response);
    sinon.stub(sale, 'findAll').resolves(getAllOrdersMockDB);
  });
  afterEach(() => {
    sale.findAll.restore()
    id = 0;
    role = '';
  });

  it('should return all customers order', async () => {
    id = 3;
    role = 'customer';
    const result = await getAllOrdersByUser(id, role);

    expect(result).to.be.equal(getAllOrdersMockDB);
  });

  it('should return all sellers order', async () => {
    id = 2;
    role = 'seller';
    const result = await getAllOrdersByUser(id, role);

    expect(result).to.be.equal(getAllOrdersMockDB);
  });

});
