import React from 'react';
import PropTypes from 'prop-types';

const testIdData = {
  deliveryStatus: 'customer_order_details__element-order-details-label-delivery-status',
};

function StatusNav({ orderData }) {
  return (
    <div className="order-status">
      <p
        data-testid="customer_order_details__element-order-details-label-order-id"
      >
        {`ID DO PEDIDO: ${orderData.id}`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`VENDEDOR: ${orderData.sellerId}`}
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        {`DATA: ${orderData.saleDate}`}
      </p>
      <p
        data-testid={ testIdData.deliveryStatus }
      >
        {`STATUS: ${orderData.status}`}
      </p>
      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        MARCAR COMO ENTREGUE
      </button>
    </div>
  );
}

StatusNav.propTypes = {
  orderData: PropTypes.arrayOf(Object).isRequired,
};

export default StatusNav;
