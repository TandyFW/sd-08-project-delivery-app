import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function OrderCard({ path, order, address, prefix, idPedido }) {
  const history = useHistory();
  const { sale_date: saleDate, status, total_price: totalPrice, id } = order;
  const formataDate = () => {
    moment.locale();
    // moment(new Date('07-18-2013 UTC')).utc().format("YYYY-MM-DD HH:mm")
    const dateFormate = moment(saleDate).utc()
      .format('DD-MM-YYYY').replaceAll('-', '/');
    return dateFormate;
  };
  console.log('ORDER---> ', order);
  return (
    <button
      className="container"
      type="button"
      onClick={ () => history.push(`/${path}/orders/${id}`) }
    >
      <div
        className="order-number"
        data-testid={ `${prefix}__element-order-id-${idPedido}` }
      >
        <span>Pedido</span>
        <h1>{ idPedido }</h1>
      </div>
      <div className="order-container">
        <div
          className="current-status"
          data-testid={ `${prefix}__element-delivery-status-${idPedido}` }
        >
          { status }
        </div>
        <div
          className="order-date"
          data-testid={ `${prefix}__element-order-date-${idPedido}` }
        >
          { formataDate() }
        </div>
        <div
          className="order-total"
          data-testid={ `${prefix}__element-card-price-${idPedido}` }
        >
          { totalPrice }
        </div>
        <div
          className="order-address"
          data-testid={ `${prefix}__element-card-address-${idPedido}` }
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
