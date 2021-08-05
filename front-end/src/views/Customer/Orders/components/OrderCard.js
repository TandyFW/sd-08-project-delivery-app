import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import './styles.css';
import socketIOClient from 'socket.io-client';

function OrderCard({ data }) {
  const { id } = data;
  const [status, setStatus] = useState();
  const ENDPOINT = 'http://localhost:3001';
  const socket = socketIOClient(ENDPOINT);
  const TEN = 10;
  useEffect(() => {
    socket.emit('setOrderStatus', { id, status: '' });
    socket.on('getUpdatedStatus', (statusFromBrack) => {
      setStatus(statusFromBrack);
    });
  }, [socket, id]);
  function statusColor() {
    if (data.status === 'Pendente') {
      return 'pendente';
    }
    if (data.status === 'Preparando') {
      return 'preparando';
    } return 'entregue';
  }
  return (
    <div className="main-wrapper-order">
      <div className="order-number">
        <p>Pedido</p>
        <p>{data.id}</p>
      </div>
      <div className="half-data">
        <div className="half-data-status">
          <p className={ statusColor() }>{status}</p>
          <div className="date-valor">
            <p className="date">
              {data.saleDate.slice(0, TEN).split('-').reverse().join('/')}
            </p>
            <p>{data.totalPrice.replace('.', ',')}</p>
          </div>
        </div>
        <p>{`${data.deliveryAddress}, ${data.deliveryNumber}`}</p>
      </div>
    </div>
  );
}

OrderCard.propTypes = {
  data: PropTypes.arrayOf(Object).isRequired,
};

export default OrderCard;
