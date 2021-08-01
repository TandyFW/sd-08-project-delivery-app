import React from 'react';
import PropTypes from 'prop-types';
import {
  CardOrderContainer,
  OrderStatus,
} from '../styles/components/CardOrder.styled';
import colors from '../styles/colors';

const CardOrder = ({
  prefix,
  address,
  id,
  deliveryStatus,
  orderDate,
  price,
  onClick,
}) => (
  <CardOrderContainer
    color={ colors.whitesmoke }
    role="button"
    tabIndex={ 0 }
    onClick={ onClick }
    onKeyDown={ onClick }
  >
    <div className="info">
      <span className="order-number">
        PEDIDO
        <span data-testid={ `${prefix}element-order-id-${id}` }>{id}</span>
      </span>
      <OrderStatus
        color={ colors.goldenrod }
        className="order-status"
        data-testid={ `${prefix}element-delivery-status-${id}` }
      >
        {deliveryStatus}
      </OrderStatus>
      <div className="price-date">
        <span data-testid={ `${prefix}element-order-date-${id}` }>
          {new Date(orderDate).toLocaleString('pt-br').split(' ')[0]}
        </span>
        <span>
          R$
          <span data-testid={ `${prefix}element-card-price-${id}` }>
            {price.replace('.', ',')}
          </span>
        </span>
      </div>
    </div>
    <div className="order-address">{address}</div>
  </CardOrderContainer>
);

CardOrder.propTypes = {
  prefix: PropTypes.string.isRequired,
  address: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  deliveryStatus: PropTypes.string.isRequired,
  orderDate: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default CardOrder;
