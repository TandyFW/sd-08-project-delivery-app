/* eslint-disable react/prop-types */
import React, { useEffect, useState } from 'react';
import socketIOClient from 'socket.io-client';
import PropTypes from 'prop-types';

const testIdData = {
  deliveryStatus: 'customer_order_details__element-order-details-label-delivery-status',
};

const ENDPOINT = 'http://localhost:3001';

function StatusNav({ orderData }) {
  const { id, saleDate } = orderData;
  const [status, setStatus] = useState();
  const socket = socketIOClient(ENDPOINT);
  const TEN = 10;

  console.log('console', status);

  useEffect(() => {
    console.log('Execuet socket call');
    // socketCallBack();
    socket.emit('getUpdatedStatus', id);
    socket.on('getUpdatedStatus', (statusFromBrack) => {
      setStatus(statusFromBrack);
    });
  }, [id, socket, socket.id]);

  function changeOrderStatus(newStatus) {
    socket.emit('clientSetOrderStatus', { id, status: newStatus });
  }

  return (
    orderData
      ? (
        <div className="order-status">
          <p
            data-testid="customer_order_details__element-order-details-label-order-id"
          >
            {`ID DO PEDIDO: ${id}`}
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            Fulana Pereira
          </p>
          <p
            data-testid="customer_order_details__element-order-details-label-order-date"
          >
            {saleDate
              ? saleDate.slice(0, TEN).split('-').reverse().join('/') : null}
          </p>
          <p
            data-testid={ testIdData.deliveryStatus }
          >
            {status}
          </p>
          <button
            onClick={ () => changeOrderStatus('Entregue') }
            type="button"
            data-testid="customer_order_details__button-delivery-check"
            disabled={ !['Em Trânsito'].includes(status) }
          >
            MARCAR COMO ENTREGUE
          </button>
        </div>
      )
      : null
  );
}

StatusNav.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }).isRequired,
  orderData: PropTypes.arrayOf(Object).isRequired,
};

// StatusNav.propTypes = {
//   orderData: PropTypes.arrayOf(Object).isRequired,
// };

export default StatusNav;
