const getSale = async (id) => ({
  id,
  total_price: '9.99',
  delivery_address: 'asssd',
  delivery_number: 'as',
  sale_date: '2021-08-03T18:12:10.000Z',
  status: 'Pendente',
  userId: 3,
  sellerId: 2,
  user_id: 3,
  seller_id: 2,
  user: {
    name: 'Cliente Zé Birita',
  },
  seller: {
    name: 'Fulana Pereira',
  },
  products: [
    {
      id: 2,
      name: 'Heineken 600ml',
      price: '7.50',
      url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
      createdAt: '2021-08-03T17:16:41.000Z',
      updatedAt: '2021-08-03T17:16:41.000Z',
      salesProducts: {
        quantity: 1,
      },
    },
    {
      id: 3,
      name: 'Antarctica Pilsen 300ml',
      price: '2.49',
      url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
      createdAt: '2021-08-03T17:16:41.000Z',
      updatedAt: '2021-08-03T17:16:41.000Z',
      salesProducts: {
        quantity: 1,
      },
    },
  ],
});

module.exports = getSale;
