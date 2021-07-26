import React from 'react';

import NavBar from '../../components/NavBar';

const headerButtons = [
  {
    label: 'PRODUTOS',
    href: '/customer/products',
  },
  {
    label: 'MEUS PEDIDOS',
    href: 'customer/orders',
  },
];

// const products = [
//   {
//     name: 'Skol',
//     price: '7.50',
//     amount: '330ml',
//     imagePath: 'https://superprix.vteximg.com.br/arquivos/ids/180544-292-292/385b999ce16bad393a31dfee6fa12c4c_cerveja-skol-473ml--lata-_lett_1.jpg',
//   },
//   {
//     name: 'Antarctica',
//     price: '7.50',
//     amount: '500ml',
//     imagePath: 'https://superprix.vteximg.com.br/arquivos/ids/180713-292-292/5e5c08c4a8071d0d6983b4aba2ea8e8c_cerveja-antarctica-473ml--lata-_lett_1.jpg',
//   },
//   {
//     name: 'Heineken',
//     price: '7.50',
//     amount: '500ml',
//     imagePath: 'https://santaluzia.vteximg.com.br/arquivos/ids/963474-1000-1000/1156454.jpg',
//   },
// ];

function Products() {
  return (
    <>
      <NavBar headerButtons={ headerButtons } />
      <div><p>Products</p></div>

    </>
  );
}

export default Products;
