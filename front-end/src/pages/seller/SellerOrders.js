import React, { useState, useEffect } from 'react';
import RequestCard from '../../components/Card/RequestCard';
import SellerNavbar from '../../components/Navbar/SellerNavbar';
import OrdersContainer from '../../styles/pages/customer/CustomerOrders';
import * as api from '../../services/api';

function SellerOrders() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    api.getOrders().then((result) => setOrders(result));
  }, []);

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
