import React, { useState, useEffect } from 'react';
import RequestCard from '../../components/Card/RequestCard';
import SellerNavbar from '../../components/Navbar/SellerNavbar';
import OrdersContainer from '../../styles/pages/customer/CustomerOrders';
import * as api from '../../services/api';
import io from '../../sockets';

function SellerOrders() {
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
    <div>
      <SellerNavbar />
      <OrdersContainer>
        { orders.map((order) => (<RequestCard
          key={ order.id }
          order={ order }
          testId="seller_orders"
          destination={ `/seller/orders/${order.id}` }
          showAddress
        />)) }
      </OrdersContainer>
    </div>
  );
}

export default SellerOrders;
