import React, { useState, useEffect } from 'react';
import CustomerNavbar from '../../components/Navbar/CustomerNavbar';
import RequestCard from '../../components/Card/RequestCard';
import OrdersContainer from '../../styles/pages/customer/Orders';
import * as api from '../../services/api';

function Sales() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.getOrders().then((result) => setOrders(result));
  }, []);

  return (
    <>
      <CustomerNavbar />
      <OrdersContainer>
        { orders.map((order) => (<RequestCard
          order={ order }
          key={ order.id }
          testId="customer_orders"
        />)) }
      </OrdersContainer>
    </>
  );
}

export default Sales;
