const orderRequest = {
  sellerId: 2,
  totalPrice: 20.90,
  deliveryAddress: 'rua qualquer',
  deliveryNumber: 'numero algum',
  products: [ { id: 3, quantity: 7 }, { id: 7, quantity: 2 } ]
};

const orderCreateRequest = {
  userId: 3,
  sellerId: 2,
  totalPrice: 20.90,
  deliveryAddress: 'rua qualquer',
  deliveryNumber: 'numero algum',
  saleDate: '2021-07-31T17:51:12.000Z',
  status: 'Pendente',
  products: [ { id: 3, quantity: 7 }, { id: 7, quantity: 2 } ]
}

const saleCreateResponse = {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: 20.90,
  deliveryAddress: 'rua qualquer',
  deliveryNumber: 'numero algum',
  saleDate: '2021-07-31T17:51:12.000Z',
  status: 'Pendente',
}

const saleProductCreateResponse = [
  {
    saleId: 1,
    productId: 3,
    quantity: 7,
  },
  {
    saleId: 1,
    productId: 7,
    quantity: 2,
  }
];

const saleByIdResponse = [ {
  id: 1,
  userId: 3,
  sellerId: 2,
  totalPrice: 20.90,
  deliveryAddress: 'rua qualquer',
  deliveryNumber: 'numero algum',
  saleDate: '2021-07-31T17:51:12.000Z',
  status: 'Pendente',
  salesProduct: [
    { quantity: 7, product: { id: 3, name: 'oi', price: '2.49', urlImage: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg' } },
    { quantity: 2, product: { id: 7, name: 'Becks 330ml', price: '4.99', urlImage: 'http://localhost:3001/images/becks_330ml.jpg' } }
  ]
} ];

const orderResponse = { sale: saleByIdResponse[0] };


module.exports = {
  orderRequest,
  orderCreateRequest,
  saleCreateResponse,
  saleProductCreateResponse,
  saleByIdResponse,
  orderResponse
};
