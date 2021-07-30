import React from 'react';
import PropTypes from 'prop-types';
import { lStorage } from '../utils';
import { OrdersList, TopBar } from '../components';

const Orders = ({ title }) => {
  const savedUser = lStorage().user.get();
  const { name, token } = savedUser;
  return (
    <div>
      <TopBar
        subject={ (title === 'customer' ? 'Meus Pedidos' : 'Pedidos') }
        user={ name }
      />
      <OrdersList name={ name } token={ token } title={ title } />
    </div>);
};

Orders.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Orders;
