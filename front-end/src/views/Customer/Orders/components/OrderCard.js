import React from 'react';
import PropTypes from 'prop-types';
import './styles.css';

function OrderCard({ data }) {
  const TEN = 10;
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
          <p className={ statusColor() }>{data.status}</p>
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
