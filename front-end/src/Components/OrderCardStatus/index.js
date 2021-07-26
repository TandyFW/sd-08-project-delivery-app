import React from 'react';
import PropTypes from 'prop-types';
import OrderStatus from './Styled';

const OrderCardStatus = ({ id, status }) => (
  <OrderStatus data-testid={ `seller_orders__element-delivery-status-${id}` }>
    {status.toUpperCase()}
  </OrderStatus>
);

export default OrderCardStatus;

OrderCardStatus.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};
