import React from 'react';
import PropTypes from 'prop-types';
import './CustomerOrderCard.css';

const CustomerOrderCard = ({ order }) => (
  <div className="order-card">
    <div className="order-card-number">
      <p>Pedido</p>
      <p data-testid={ `customer_orders__element-order-id-${order.id}` }>{order.id}</p>
    </div>
    <div className="order-card-status">
      <span
        data-testid={ `customer_orders__element-delivery-status-${order.id}` }
      >
        {order.status}
      </span>
    </div>
    <div className="order-card-info">
      <p
        data-testid={ `customer_orders__element-order-date-${order.id}` }
      >
        {order.date}
      </p>
      <p
        data-testid={ `customer_orders__element-card-price-${order.id}` }
      >
        {order.total}
      </p>
    </div>
  </div>
);

CustomerOrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomerOrderCard;
