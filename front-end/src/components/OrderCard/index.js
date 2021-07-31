import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
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

const renderAddress = (id, address, number) => (
  <OrderAddress data-testid={ `customer_orders__element-card-address-${id}` }>
    {`${address}, ${number}`}
  </OrderAddress>
);

export default function OrderCard({ orderData, isSeller }) {
  const history = useHistory();
  const TARGET_LENGTH = 4;

  return (
    <OrderContainer onClick={ () => history.push(`/customer/orders/${orderData.id}`) }>
      <OrderIdContainer>
        <p>Pedido</p>
        <OrderId
          data-testid={ `customer_orders__element-order-id-${orderData.id}` }
        >
          {orderData.id.toString().padStart(TARGET_LENGTH, '0')}
        </OrderId>
      </OrderIdContainer>
      <OrderGeneral>
        <OrderData>
          <OrderCardStatus
            data-testid={ `customer_orders__element-delivery-status-${orderData.id}` }
            status={ orderData.status }
            id={ orderData.id }
          />
          <OrderDetails>
            <OrderDetailsInfo
              data-testid={ `customer_orders__element-order-date-${orderData.id}` }
            >
              {orderData.sale_date}
            </OrderDetailsInfo>
            <OrderDetailsInfo
              data-testid={ `customer_orders__element-card-price-${orderData.id}` }
            >
              {`R$${orderData.total_price}`}
            </OrderDetailsInfo>
          </OrderDetails>
        </OrderData>
        {isSeller
          && renderAddress(
            orderData.id,
            orderData.delivery_address,
            orderData.delivery_number,
          )}
      </OrderGeneral>
    </OrderContainer>
  );
}

OrderCard.propTypes = {
  orderData: PropTypes.shape({
    id: PropTypes.number,
    user_id: PropTypes.number,
    seller_id: PropTypes.number,
    total_price: PropTypes.number,
    delivery_address: PropTypes.string,
    delivery_number: PropTypes.string,
    sale_date: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  isSeller: PropTypes.bool,
};

OrderCard.defaultProps = {
  isSeller: false,
};
