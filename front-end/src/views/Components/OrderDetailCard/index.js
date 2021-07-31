import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

function OrderDetailsCard(order) {
  console.log(order);
  const { order: {
    id,
    status,
    saleDate,
    deliveryAddress,
    deliveryNumber,
    totalPrice } } = order;

  const history = useHistory();

  function handleClick() {
    history.push(`/seller/orders/${id}`);
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
              {saleDate}
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
