import React from 'react';
import PropTypes from 'prop-types';
import OrderStatus from './Styled';

const defineBgColor = (status) => {
  const lowerCaseStatus = status.toLowerCase();
  if (lowerCaseStatus === 'preparando') {
    return '#66CC00';
  }
  if (lowerCaseStatus === 'pendente') {
    return '#CCB800';
  }
  return '#00CC9B';
};

const OrderCardStatus = ({ id, status }) => {
  const color = defineBgColor(status);

  return (
    <OrderStatus
      data-testid={ `seller_orders__element-delivery-status-${id}` }
      bgColor={ color }
    >
      {status.toUpperCase()}
    </OrderStatus>
  );
};

export default OrderCardStatus;

OrderCardStatus.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
};
