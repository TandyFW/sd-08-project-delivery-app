import React from 'react';
import { useHistory } from 'react-router-dom';

import './orderDetailsCard.css';

function OrderDetailsCard() {
  const id = 1;
  const history = useHistory();

  function handleClick() {
    console.log('clicou');
    history.push(`/seller/orders/${id}`);
  }

  return (
    <div
      role="button"
      tabIndex={ 0 }
      onKeyPress={ handleClick }
      onClick={ () => handleClick() }
      className="Card"
      data-testid={ `seller_orders__element-order-date-${id}` }
    >
      <div className="order-number">
        <span>Pedido</span>
        <span>0001</span>
      </div>
      <div className="">
        <div className="order-status-date">
          <div className="order-status">PENDENTE</div>
          <div className="status-date-value">
            <span>08/08/21</span>
            <span>Rs 23,80</span>
          </div>
        </div>
        <div>Rua Sessenta e Dois, Bairro Maranguepe II, 533</div>
      </div>
    </div>
  );
}

export default OrderDetailsCard;
