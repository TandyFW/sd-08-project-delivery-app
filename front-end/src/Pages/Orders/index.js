import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import api from '../../Apis/api1';
import { OrderCard, Header, HeaderSeller } from '../../components';
import OrderCardContainer from './Styled';
import { Context } from '../../Context';

const getOrders = (token, userRole, setOrders) => api
  .getAllSales(token, userRole).then((response) => {
    setOrders(response);
  });

const Orders = ({ userRole }) => {
  const { client } = useContext(Context);
  const [orders, setOrders] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  useEffect(() => getOrders(token, userRole, setOrders), [token, userRole]);

  useEffect(() => {
    client.on('changeStatus', () => getOrders(token, userRole, setOrders));
  }, [client, orders, token, userRole]);

  return (
    <main>
      {userRole === 'customer' ? <Header /> : <HeaderSeller />}
      <OrderCardContainer>
        {!!orders.length
          && orders.map((order) => (
            <OrderCard
              key={ order.id }
              orderData={ order }
              isSeller={ userRole === 'seller' }
            />
          ))}
      </OrderCardContainer>
    </main>
  );
};

export default Orders;

Orders.propTypes = {
  userRole: PropTypes.string.isRequired,
};
