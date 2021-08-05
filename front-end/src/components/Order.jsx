import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

function Order(props) {
  const history = useHistory();
  const {
    prefix, id, status, saleDate, totalPrice, deliveryAddress, deliveryNumber,
    isSeller } = props;
  const urlOrderDetails = isSeller ? '/seller/orders/' : '/customer/orders/';
  const handleOrderDetails = () => history.push(`${urlOrderDetails}${id}`);
  return (
    <div
      onClick={ handleOrderDetails }
      onKeyDown={ handleOrderDetails }
      role="button"
      tabIndex="0"
    >
      <span data-testid={ `${prefix}element-order-id-${id}` }>{ id }</span>
      <span data-testid={ `${prefix}element-delivery-status-${id}` }>
        { status }
      </span>
      <div>
        <span data-testid={ `${prefix}element-order-date-${id}` }>
          { saleDate }
        </span>
        <span data-testid={ `${prefix}element-card-price-${id}` }>
          { `R$${totalPrice}` }
        </span>
        {
          isSeller && (
            <span
              data-testid={ `${prefix}element-card-address-${id}` }
            >
              { `${deliveryAddress} ${deliveryNumber}` }
            </span>
          )
        }
      </div>
    </div>
  );
}

Order.propTypes = {
  prefix: PropTypes.string.isRequired,
  id: PropTypes.number.isRequired,
  status: PropTypes.string.isRequired,
  saleDate: PropTypes.number.isRequired,
  totalPrice: PropTypes.number.isRequired,
  deliveryAddress: PropTypes.string.isRequired,
  deliveryNumber: PropTypes.string.isRequired,
  isSeller: PropTypes.bool.isRequired,
};

export default Order;
