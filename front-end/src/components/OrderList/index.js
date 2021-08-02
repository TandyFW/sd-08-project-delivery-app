import React from 'react';
import OrderCard from '../OrderCard';

import OrderListBody from './styled';

const fakeOrders = [
  { id: 1, status: 'pendente', date: '01/01/2001', price: '4,59' },
  { id: 1, status: 'entregue', date: '01/01/2001', price: '5,59' },
];

function OrderList() {
  return (
    <OrderListBody>
      {fakeOrders.map((order, index) => <OrderCard key={ index } order={ order } />)}
    </OrderListBody>
  );
}

export default OrderList;
