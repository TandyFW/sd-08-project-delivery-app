import React from 'react';
import PropTypes from 'prop-types';
import { lStorage } from '../utils';
import { OrdersList, NavBar } from '../components';

const Orders = ({ title }) => {
  const savedUser = lStorage().user.get();
  const { name, token } = savedUser;
  return (
    <>
      <NavBar userType={ title } userName={ name } />
      <OrdersList name={ name } token={ token } title={ title } />
    </>);
};

Orders.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Orders;
