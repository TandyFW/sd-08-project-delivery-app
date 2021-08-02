import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function OrderCard({ data, index }) {
  const TEN = 10;
  return (
    <Link to={ `/customer/orders/${data.id}` }>
      <div
        key={ index }
        className="orders-cards"
      >
        <p
          data-testid={ `customer_orders__element-order-id-${data.id}` }
        >
          {`PEDIDO: ${data.id}`}
        </p>
        <p
          data-testid={ `customer_orders__element-delivery-status-${data.id}` }
        >
          {`STATUS: ${data.status}`}
        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${data.id}` }
        >
          {`DATA: ${data.saleDate.slice(0, TEN).split('-').reverse().join('/')}`}
        </p>
        <p
          data-testid={ `customer_orders__element-card-price-${data.id}` }
        >
          {`${data.totalPrice.replace('.', ',')}`}
        </p>
        <p
          data-testid={ `customer_orders__element-card-address-${data.id}` }
        >
          {`ENDEREÇO: ${data.deliveryAddress}, ${data.deliveryNumber}`}
        </p>
      </div>
    </Link>
  );
}

OrderCard.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
  index: PropTypes.string.isRequired,
};

export default OrderCard;
