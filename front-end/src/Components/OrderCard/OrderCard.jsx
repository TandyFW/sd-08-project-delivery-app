import React, { useState } from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import moment from 'moment';
import { socket } from '../../socket/Socket';

export default function OrderCard({ path, order, address, prefix, idPedido }) {
  const history = useHistory();
  const { sale_date: saleDate, status, total_price: totalPrice, id } = order;
  const [updatedStatus, setUpdatedStatus] = useState(status);
  console.log(idPedido);
  socket.on('preparando', (orderIdFromSocket) => {
    if (Number(orderIdFromSocket) === id) {
      setUpdatedStatus('Preparando');
    }
  });
  socket.on('emTransito', (orderIdFromSocket) => {
    if (Number(orderIdFromSocket) === id) {
      setUpdatedStatus('Em Trânsito');
    }
  });
  socket.on('entregue', (orderIdFromSocket) => {
    if (Number(orderIdFromSocket) === id) {
      setUpdatedStatus('Entregue');
    }
  });

  const formataDate = () => {
    moment.locale();
    // moment(new Date('07-18-2013 UTC')).utc().format("YYYY-MM-DD HH:mm")
    const dateFormate = moment(saleDate).utc()
      .format('DD-MM-YYYY').replaceAll('-', '/');
    return dateFormate;
  };
  return (
    <button
      className="container"
      type="button"
      onClick={ () => history.push(`/${path}/orders/${id}`) }
    >
      <div
        className="order-number"
      >
        <span>Pedido</span>
        <h1 data-testid={ `${prefix}__element-order-id-${id}` }>{ id }</h1>
      </div>
      <div className="order-container">
        <div
          className="current-status"
          data-testid={ `${prefix}__element-delivery-status-${id}` }
        >
          { updatedStatus }
        </div>
        <div
          className="order-date"
          data-testid={ `${prefix}__element-order-date-${id}` }
        >
          { formataDate() }
        </div>
        <div
          className="order-total"
          data-testid={ `${prefix}__element-card-price-${id}` }
        >
          { totalPrice.replace('.', ',') }
        </div>
        <div
          className="order-address"
          data-testid={ `${prefix}__element-card-address-${id}` }
        >
          { address }
        </div>
      </div>
    </button>
  );
}

OrderCard.propTypes = {
  address: PropTypes.string.isRequired,
  prefix: PropTypes.string.isRequired,
  order: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
  idPedido: PropTypes.string.isRequired,
};
