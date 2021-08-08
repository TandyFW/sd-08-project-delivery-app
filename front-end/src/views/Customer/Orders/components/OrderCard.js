import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import socketIOClient from 'socket.io-client';

function OrderCard({ data }) {
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
    <div className="main-wrapper-order">
      <div className="order-number">
        <p>Pedido</p>
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
      </div>
      <div className="half-data">
        <div className="half-data-status">
          <p
            data-testid={ `customer_orders__element-delivery-status-${data.id}` }
            className={ statusColor() }
          >
            {status}
          </p>
          <div className="date-valor">
            <p
              data-testid={ `customer_orders__element-order-date-${data.id}` }
              className="date"
            >
              {data.saleDate.slice(0, TEN).split('-').reverse().join('/')}
            </p>
            <p
              data-testid={ `customer_orders__element-card-price-${data.id}` }
            >
              {`R$ ${data.totalPrice.replace('.', ',')}`}
            </p>
          </div>
        </div>
        <p
          data-testid={ `customer_orders__element-card-address-${data.id}` }
        >
          {`${data.deliveryAddress}, ${data.deliveryNumber}`}
        </p>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default OrderCard;
