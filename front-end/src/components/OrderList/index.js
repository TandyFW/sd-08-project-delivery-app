import React, { useState, useEffect } from 'react';
import OrderCard from '../OrderCard';
import { getSalesByUserId, getSalesBySellerId } from '../../services/api';

import OrderListBody from './styled';

// const fakeOrders = [
//   { id: 1, status: 'pendente', date: '01/01/2001', price: '4,59' },
//   { id: 1, status: 'entregue', date: '01/01/2001', price: '5,59' },
// ];

function OrderList() {
  const [orders, setOrders] = useState([]);
  const [userRole, setUserRole] = useState('');

  const getPageRole = (orderId) => {
    if (userRole === 'seller') return `/seller/orders/${orderId}`;
    if (userRole === 'customer') return `/customer/orders/${orderId}`;
  };

  useEffect(() => {
    const { id, token, role } = JSON.parse(localStorage.getItem('user')) || '';
    setUserRole(role);

    if (role === 'customer') {
      getSalesByUserId(id, token)
        .then(({ sales }) => {
          setOrders(sales);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (role === 'seller') {
      getSalesBySellerId(id, token)
        .then(({ sales }) => {
          setOrders(sales);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <OrderListBody>
      {orders.map((order) => (<OrderCard
        key={ order.id }
        order={ order }
        redirect={ getPageRole(order.id) }
        userRole={ userRole }
      />))}
    </OrderListBody>
  );
}

export default OrderList;
