import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';

export default function OrderCard({ path, order, address, prefix }) {
  const history = useHistory();
  return (
    <button
      className="container"
      type="button"
      onClick={ () => history.push(`/${path}/orders/${order.id}`) }
    >
      <div
        className="order-number"
        data-testid={ `${prefix}__element-order-id-${order.id}` }
      >
        <span>Pedido</span>
        <h1>{ order.id }</h1>
      </div>
      <div className="order-container">
        <div
          className="current-status"
          data-testid={ `${prefix}__element-delivery-status-${order.id}` }
        >
          { order.status }
        </div>
        <div
          className="order-date"
          data-testid={ `${prefix}__element-order-date-${order.id}` }
        >
          { order.date }
        </div>
        <div
          className="order-total"
          data-testid={ `${prefix}__element-card-price-${order.id}` }
        >
          { order.price }
        </div>
        <div
          className="order-address"
          data-testid={ `${prefix}__element-card-address-${order.id}` }
        >
          { address }
        </div>
      </div>
    </button>
  );
}

OrderCard.propTypes = {
  address: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
};
