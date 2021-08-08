import React, { useState, useEffect } from 'react';
import OrderCard from '../OrderCard';
import { getSalesByUserId } from '../../services/api';

import OrderListBody from './styled';

// const fakeOrders = [
//   { id: 1, status: 'pendente', date: '01/01/2001', price: '4,59' },
//   { id: 1, status: 'entregue', date: '01/01/2001', price: '5,59' },
// ];

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const { id, token } = JSON.parse(localStorage.getItem('user')) || '';

    getSalesByUserId(id, token)
      .then(({ sales }) => {
        setOrders(sales);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <OrderListBody>
      {orders.map((order) => (<OrderCard
        key={ order.id }
        order={ order }
        redirect={ `/customer/orders/${order.id}` }
      />))}
    </OrderListBody>
  );
}

export default OrderList;
