import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../Apis/api1';
import { OrderCard, Header, HeaderSeller } from '../../components';
import OrderCardContainer from './Styled';

const Orders = ({ userRole }) => {
  const [orders, setOrders] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(
    () => api.getAllSales(token, userRole).then((response) => {
      setOrders(response);
    }),
    [token, userRole],
  );

  return (
    <main>
      {userRole === 'customer' ? <Header /> : <HeaderSeller />}
      <OrderCardContainer>
        {!!orders.length
          && orders.map(
            (order) => (<OrderCard
              key={ order.id }
              orderData={ order }
              isSeller={ userRole === 'seller' }
            />),
          )}
      </OrderCardContainer>
    </main>
  );
};

export default Orders;

Orders.propTypes = {
  userRole: PropTypes.string.isRequired,
};
