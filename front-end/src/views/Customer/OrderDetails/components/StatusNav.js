import React, { useRef } from 'react';
import PropTypes from 'prop-types';

const testIdData = {
  deliveryStatus: 'customer_order_details__element-order-details-label-delivery-status',
};

function StatusNav({ orderData }) {
  const TEN = 10;
  const status = useRef();
  function statusColor() {
    if (status.current.innerHTML.includes('Pendente')) return 'pendente';
    if (status.current.innerHTML.includes('Preparando')) return 'preparando';
    return 'entregue';
  }
  return (
    orderData
      ? (
        <div className="order-detail-status">
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`ID DO PEDIDO: ${orderData.id}`}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            Fulana Pereira
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {orderData.saleDate
              ? orderData.saleDate.slice(0, TEN).split('-').reverse().join('/') : null}
          </p>
          <p
            ref={ status }
            className={ statusColor() }
            data-testid={ testIdData.deliveryStatus }
          >
            {`STATUS: ${orderData.status}`}
          </p>
          <button
            className="order-detail-button"
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      )
      : null
  );
}

StatusNav.propTypes = {
  orderData: PropTypes.arrayOf(Object).isRequired,
};

export default StatusNav;
