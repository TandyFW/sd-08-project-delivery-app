import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import './CustomerOrderCard.css';

const CustomerOrderCard = ({ order }) => (
  <Link to={ `/customer/orders/${order.id}` }>
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
          {order.saleDate}
        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${order.id}` }
        >
          {order.totalPrice}
        </p>
      </div>
    </div>
  </Link>
);

CustomerOrderCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    status: PropTypes.string.isRequired,
    saleDate: PropTypes.string.isRequired,
    totalPrice: PropTypes.string.isRequired,
  }).isRequired,
};

export default CustomerOrderCard;
