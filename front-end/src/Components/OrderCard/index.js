import React from 'react';
import PropTypes from 'prop-types';
import OrderCardStatus from '../OrderCardStatus';
import {
  OrderAddress,
  OrderContainer,
  OrderData,
  OrderDetails,
  OrderDetailsInfo,
  OrderGeneral,
  OrderId,
  OrderIdContainer,
} from './Styled';

const renderAddress = (id) => (
  <OrderAddress data-testid={ `seller_orders__element-card-address-${id}` }>
    enderecoOrder
  </OrderAddress>
);

const OrderCard = ({ id, status, isSeller }) => {
  const TARGET_LENGTH = 4;
  return (
    <OrderContainer>
      <OrderIdContainer>
        <p>Pedido</p>
        <OrderId data-testid={ `seller_orders__element-order-id-${id}` }>
          {id.toString().padStart(TARGET_LENGTH, '0')}
        </OrderId>
      </OrderIdContainer>
      <OrderGeneral>
        <OrderData>
          <OrderCardStatus
            data-testid={ `seller_orders__element-delivery-status-${id}` }
            status={ status }
            id={ id }
          />
          <OrderDetails>
            <OrderDetailsInfo data-testid={ `seller_orders__element-order-date-${id}` }>
              OrderDate
            </OrderDetailsInfo>
            <OrderDetailsInfo data-testid={ `seller_orders__element-card-price-${id}` }>
              R$ 300,30
            </OrderDetailsInfo>
          </OrderDetails>
        </OrderData>
        {isSeller && renderAddress(id)}
      </OrderGeneral>
    </OrderContainer>
  );
};

export default OrderCard;

OrderCard.propTypes = {
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  isSeller: PropTypes.bool,
};

OrderCard.defaultProps = {
  isSeller: false,
};
