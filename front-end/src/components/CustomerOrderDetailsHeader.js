import React from 'react';
import PropTypes from 'prop-types';

const statusTest = 'customer_order_details__element-order-details-label-delivery-status';

function CustomerOrderDetailsHeader({ id, seller, date, status }) {
  return (
    <header>
      <span
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        { `Pedido ${id}` }
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`P. Vend: ${seller}`}
      </span>
      <span
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { new Date(date).toLocaleString('pt-br')}
      </span>
      <span data-testid={ statusTest }>{ status }</span>
      <span
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como entregue
      </span>
    </header>
  );
}

CustomerOrderDetailsHeader.propTypes = {
  id: PropTypes.string.isRequired,
  seller: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
};
export default CustomerOrderDetailsHeader;
