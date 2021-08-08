import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import socketIOClient from 'socket.io-client';
import './styles.css';

const ENDPOINT = 'http://localhost:3001';

function OrderDetailsCard(order) {
  console.log(order);
  const [status, setStatus] = useState();
  const socket = socketIOClient(ENDPOINT);
  const { order: {
    id,
    saleDate,
    deliveryAddress,
    deliveryNumber,
    totalPrice } } = order;

  const history = useHistory();

  function handleClick() {
    history.push(`/seller/orders/${id}`);
  }

  useEffect(() => {
    console.log('Execuet socket call');
    // socketCallBack();
    socket.emit('getUpdatedStatus', id);
    socket.on('getUpdatedStatus', (statusFromBrack) => {
      setStatus(statusFromBrack);
    });
  }, [id, socket, socket.id]);

  function formatDate(fullDate) {
    const date = fullDate.split('T');
    const dateSplited = date[0].split('-');
    return `${dateSplited[2]}/${dateSplited[1]}/${dateSplited[0]}`;
  }

  return (
    <div
      role="button"
      tabIndex={ 0 }
      onKeyPress={ handleClick }
      onClick={ () => handleClick() }
      className="Card"
    >
      <div
        className="order-number"
        data-testid={ `seller_orders__element-order-id-${id}` }
      >
        <span>Pedido</span>
        <span>{deliveryNumber}</span>
      </div>
      <div className="">
        <div className="order-status-date">
          <div
            className="order-status"
            data-testid={ `seller_orders__element-delivery-status-${id}` }
          >
            {status}
          </div>
          <div className="status-date-value">
            <span data-testid={ `seller_orders__element-order-date-${id}` }>
              { formatDate(saleDate)}
            </span>
            <span data-testid={ `seller_orders__element-card-price-${id}` }>
              R$
              {totalPrice}
            </span>
          </div>
        </div>
        <div data-testid={ `seller_orders__element-card-address-${id}` }>
          {deliveryAddress}
        </div>
      </div>
    </div>
  );
}

export default OrderDetailsCard;
