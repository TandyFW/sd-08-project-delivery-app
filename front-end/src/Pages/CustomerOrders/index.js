import React, { useEffect, useState } from 'react';
import api from '../../Apis/api1';
import { OrderCard, Header } from '../../components';
import OrderCardContainer from './Styled';

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(
    () => api.getAllSales(token).then((response) => {
      setOrders(response);
    }),
    [token],
  );

  return (
    <main>
      <Header />
      <OrderCardContainer>
        {!!orders.length
          && orders.map((order) => <OrderCard key={ order.id } orderData={ order } />)}
      </OrderCardContainer>
    </main>
  );
};

export default CustomerOrders;
