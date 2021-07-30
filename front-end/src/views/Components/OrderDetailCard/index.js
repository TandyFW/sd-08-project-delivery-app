import React from 'react';
import { useHistory } from 'react-router-dom';

import './styles.css';

const data = {
  id: 1,
  order: '0001',
  status: 'PENDENTE',
  date: '08/08/21',
  value: '23,80',
  address: 'Rua Sessenta e Dois, Bairro Maranguepe II, 533',
};

function OrderDetailsCard() {
  const { id, order, status, date, value, address } = data;
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
        <span>{order}</span>
      </div>
      <div className="">
        <div className="order-status-date">
          <div className="order-status">{status}</div>
          <div className="status-date-value">
            <span>{date}</span>
            <span>
              R$
              {value}
            </span>
          </div>
        </div>
        <div>{address}</div>
      </div>
    </div>
  );
}

export default OrderDetailsCard;
