import React from 'react';
import PropTypes from 'prop-types';
import { Button } from '@material-ui/core';
import SaleInfoBody from './styled';

const NEED_A_ZERO = 10;

export default function SaleInfo({ sale: { id, seller, saleDate, status } }) {
  const formatDate = () => {
    const date = new Date(saleDate);
    let day = date.getDate();
    let month = date.getMonth();
    const fullYear = date.getFullYear();

    if (day < NEED_A_ZERO) day = `0${day}`;
    if (month < NEED_A_ZERO) month = `0${month + 1}`;
    return `${day}/${month}/${fullYear}`;
  };
  return (
    <SaleInfoBody>
      <div>Detalhes do pedido</div>
      <p>
        Pedido:
        <span
          data-testid="customer_order_details__element-order-details-label-order-id"
        >
          { id }
        </span>
      </p>
      <p>
        P. Vend.
        <span
          data-testid="customer_order_details__element-order-details-label-seller-name"
        >
          { seller.name }
        </span>
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-order-date"
      >
        { formatDate() }
      </p>
      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { status }
      </p>
      <Button
        data-testid="customer_order_details__button-delivery-check"
        variant="contained"
        color="primary"
        type="Button"
        disabled
      >
        MARCAR COMO ENTREGUE
      </Button>
    </SaleInfoBody>
  );
}

SaleInfo.propTypes = {
  sale: PropTypes.shape({
    id: PropTypes.number.isRequired,
    seller: PropTypes.objectOf(PropTypes.any).isRequired,
    saleDate: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
  }).isRequired,
};
