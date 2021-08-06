import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import socketIOClient from 'socket.io-client';

const ENDPOINT = 'http://localhost:3001';

function OrderCard({ data, index }) {
  const { id } = data;
  const [status, setStatus] = useState();
  console.log(status);

  const socket = socketIOClient(ENDPOINT);

  // useEffect(() => {
  //   socket.emit('setOrderStatus', { id, status: '' });
  //   socket.on('getUpdatedStatus', (statusFromBrack) => {
  //     setStatus(statusFromBrack);
  //   });
  // }, [socket, id]);

  useEffect(() => {
    console.log('Execuet socket call');
    // socketCallBack();
    socket.emit('getUpdatedStatus', id);
    socket.on('getUpdatedStatus', (statusFromBrack) => {
      setStatus(statusFromBrack);
    });
  }, [id, socket, socket.id]);

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
          {status}
        </p>
        <p
          data-testid={ `customer_orders__element-order-date-${data.id}` }
        >
          {`${data.saleDate.slice(0, TEN).split('-').reverse().join('/')}`}
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
