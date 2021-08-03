import React from 'react';
import PropTypes from 'prop-types';

function Order(props) {
  const { prefix, id, deliveryStatus, date, price } = props;
  return (
    <div>
      <span data-testid={ `${prefix}element-order-id-${id}` }>{ id }</span>
      <span data-testid={ `${prefix}element-delivery-status-${id}` }>
        { deliveryStatus }
      </span>
      <div>
        <span data-testid={ `${prefix}element-order-date-${id}` }>
          { date }
        </span>
        <span data-testid={ `${prefix}element-card-price-${id}` }>
          { `R$${price}` }
        </span>
      </div>
    </div>
  );
}

Order.propTypes = {
  prefix: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deliveryStatus: PropTypes.string.isRequired,
  date: PropTypes.number.isRequired,
  price: PropTypes.number.isRequired,
};

export default Order;
