import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import OrderStatus from '../OrderStatus';

import { OrderCardBody, DatePrice } from './styled';

function OrderCard({ order: { id, status, saleDate, totalPrice }, redirect, userRole }) {
  const history = useHistory();
  return (
    <OrderCardBody onClick={ () => history.push(redirect) }>
      <span
        data-testid={ `${userRole}_orders__element-order-id-${id}` }
      >
        {`pedido ${id}`}
      </span>
      <OrderStatus
        status={ status }
        testId={ `${userRole}_orders__element-delivery-status-${id}` }
      />
      <DatePrice>
        <span
          data-testid={ `${userRole}_orders__element-order-date-${id}` }
        >
          {new Date(saleDate).toLocaleString('pt-br').split(' ')[0]}
        </span>
        <span
          data-testid={ `${userRole}_orders__element-card-price-${id}` }
        >
          {'R$ '}
          <span>
            { totalPrice
              .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
              .replace('.', ',') }
          </span>
        </span>
      </DatePrice>
    </OrderCardBody>
  );
}

OrderCard.propTypes = {
  order: PropTypes.objectOf(PropTypes.any).isRequired,
  redirect: PropTypes.string.isRequired,
  userRole: PropTypes.string.isRequired,
};

export default OrderCard;
