import React from 'react';
import PropTypes from 'prop-types';
import { updateSaleStatus } from '../services/Api';

function OrderDetailsHeader({ order, user }) {
  const { id, saleDate, status } = order;
  console.log('order - Orderdetails page: ', order);
  const { role, token } = user;
  const statusId = '_order_details__element-order-details-label-delivery-status';
  const sellerNameId = '_order_details__element-order-details-label-seller-name';

  const handleClick = async (statusObj) => {
    await updateSaleStatus(id, statusObj, token);
  };
  return (
    <header>
      <span
        data-testid={ `${role}_order_details__element-order-details-label-order-id` }
      >
        { `Pedido ${id}` }
      </span>
      { role === 'customer'
        && (
          <span
            data-testid={ `${role}${sellerNameId}` }
          >
            {`P. Vend: ${order.seller.name}`}
          </span>) }
      <span
        data-testid={ `${role}_order_details__element-order-details-label-order-date` }
      >
        { new Date(saleDate).toLocaleString('pt-br')}
      </span>
      <span
        data-testid={ `${role}${statusId}` }
      >
        { status }
      </span>

      { role === 'customer'
        && (
          <button
            type="button"
            disabled={ status === 'Pendente' }
            data-testid={ `${role}_order_details__button-delivery-check` }
            onClick={ handleClick({ status: 'Entregue' }) }
          >
            Marcar como entregue
          </button>) }
      { role === 'seller'
        && (
          <button
            type="button"
            disabled={ status === 'Preparando' || status === 'Entregue' }
            data-testid={ `${role}_order_details__button-preparing-check` }
            onClick={ handleClick({ status: 'Preparando' }) }
          >
            Preparar pedido
          </button>) }
      { role === 'seller'
        && (
          <button
            type="button"
            disabled={ status === 'Pendente' || status === 'Entregue' }
            data-testid={ `${role}_order_details__button-dispatch-check` }
            onClick={ handleClick({ status: 'Em transito' }) }
          >
            Saiu para entrega
          </button>) }
    </header>
  );
}

OrderDetailsHeader.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number.isRequired,
    saleDate: PropTypes.string.isRequired,
    seller: PropTypes.shape({
      name: PropTypes.string.isRequired,
    }).isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
  user: PropTypes.shape({
    role: PropTypes.string.isRequired,
    token: PropTypes.string.isRequired,
  }).isRequired,
};
export default OrderDetailsHeader;
