import React from 'react';
import PropTypes from 'prop-types';

import OrderStatus from '../OrderStatus';

import { OrderCardBody, DatePrice } from './styled';

function OrderCard({ order: { id, status, date, price } }) {
  return (
    <OrderCardBody>
      <span
        data-testid={ `customer_orders__element-order-id-${id}` }
      >
        {`pedido ${id}`}
      </span>
      <OrderStatus
        status={ status }
        testId={ `customer_orders__element-delivery-status-${id}` }
      />
      <DatePrice>
        <span
          data-testid={ `customer_orders__element-order-date-${id}` }
        >
          {date}
        </span>
        <span
          data-testid={ `customer_orders__element-card-price-${id}` }
        >
          {price}
        </span>
      </DatePrice>
    </OrderCardBody>
  );
}

OrderCard.propTypes = {
  order: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default OrderCard;
