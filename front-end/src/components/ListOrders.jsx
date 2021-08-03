import React from 'react';
import Order from './Order';

function ListOrders() {
  const prefix = 'customer_products__';
  const orders = [
    {
      id: '1',
      deliveryStatus: 'PENDENTE',
      date: '10/04/2021',
      price: '35,80',
    },
    {
      id: '2',
      deliveryStatus: 'ENTREGUE',
      date: '11/04/2021',
      price: '35,80',
    },
    {
      id: '3',
      deliveryStatus: 'PENDENTE',
      date: '12/04/2021',
      price: '35,80',
    },
    {
      id: '4',
      deliveryStatus: 'PENDENTE',
      date: '15/04/2021',
      price: '35,80',
    },
  ];
  return (
    <>
      {orders.map((order) => <Order key={ order.id } { ...order } prefix={ prefix } />)}
    </>
  );
}

export default ListOrders;
