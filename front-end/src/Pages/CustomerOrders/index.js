import React, { useEffect, useState } from 'react';
import api from '../../Apis/api1';
import { OrderCard, Header } from '../../components';
import OrderCardContainer from './Styled';

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => api.getAllSales().then((response) => setOrders(response)), []);

  return (
    <main>
      <Header />
      <OrderCardContainer>
        {!!orders.length
          && orders.map((order) => (<OrderCard
            key={ order.id }
            orderData={ order }
          />))}
      </OrderCardContainer>
    </main>
  );
};

export default CustomerOrders;
