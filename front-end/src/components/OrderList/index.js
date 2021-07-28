import React from 'react';
import OrderCard from '../OrderCard';

const fakeOrders = [
  { id: 1, status: 'pendente', date: '01/01/2001', price: '4,59' },
  { id: 1, status: 'entregue', date: '01/01/2001', price: '5,59' },
];

function OrderList() {
  return (
    <div>
      {fakeOrders.map((order, index) => <OrderCard key={ index } order={ order } />)}
    </div>
  );
}

export default OrderList;
