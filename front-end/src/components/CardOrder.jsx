import React from 'react';
import PropTypes from 'prop-types';
import dateFormat from '../services/dateFormat';

const CardOrder = ({ prefix, id, deliveryStatus, orderDate, price, onClick }) => (
  <div role="button" tabIndex={ 0 } onClick={ onClick } onKeyDown={ onClick }>
    <span data-testid={ `${prefix}element-order-id-${id}` }>{ id }</span>
    <span data-testid={ `${prefix}element-delivery-status-${id}` }>
      { deliveryStatus }
    </span>
    <div>
      <span data-testid={ `${prefix}element-order-date-${id}` }>
        { dateFormat(orderDate) }
      </span>
      <span data-testid={ `${prefix}element-card-price-${id}` }>
        { `R$${price}` }
      </span>
    </div>
  </div>
);

CardOrder.propTypes = {
  prefix: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deliveryStatus: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardOrder;
