import React from 'react';
import { useHistory } from 'react-router';
import PropTypes from 'prop-types';
import moment from 'moment';

export default function OrderCard({ path, order, address, prefix, idPedido }) {
  const history = useHistory();
  console.log(idPedido);
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
      >
        <span>Pedido</span>
        <h1 data-testid={ `${prefix}__element-order-id-${id}` }>{ id }</h1>
      </div>
      <div className="order-container">
        <div
          className="current-status"
          data-testid={ `${prefix}__element-delivery-status-${id}` }
        >
          { status }
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
