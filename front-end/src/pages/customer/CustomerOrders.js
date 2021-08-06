import React, { useState, useEffect } from 'react';
import CustomerNavbar from '../../components/Navbar/CustomerNavbar';
import RequestCard from '../../components/Card/RequestCard';
import OrdersContainer from '../../styles/pages/customer/CustomerOrders';
import io from '../../sockets';
import * as api from '../../services/api';

function CustomerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.getOrders().then((result) => setOrders(result));
  }, []);

  const addNewOrder = ((order) => setOrders([...orders, order]));

  useEffect(() => {
    io.on('newSale', addNewOrder);

    return () => io.removeAllListeners('newSale');
  });

  const handleSetStatus = (newStatus, id) => {
    const newOrders = orders.map((order) => {
      if (order.id === id) {
        return { ...order, status: newStatus };
      }
      return order;
    });
    setOrders(newOrders);
  };

  useEffect(() => {
    io.on('refreshOrder', handleSetStatus);

    return () => io.removeAllListeners('refreshOrder');
  });

  return (
    <>
      <CustomerNavbar />
      <OrdersContainer>
        { orders.map((order) => (<RequestCard
          order={ order }
          key={ order.id }
          testId="customer_orders"
          destination={ `/customer/orders/${order.id}` }
        />)) }
      </OrdersContainer>
    </>
  );
}

export default CustomerOrders;
