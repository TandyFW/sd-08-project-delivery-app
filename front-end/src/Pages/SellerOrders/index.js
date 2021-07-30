import React, { useEffect, useState } from 'react';
import api from '../../Apis/api1';

import { OrderCard, HeaderSeller } from '../../components';
import OrderCardContainer from './Styled';

const SellerOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => api.getAllSales().then((response) => setOrders(response)), []);

  return (
    <main>
      <HeaderSeller />
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

export default SellerOrders;
