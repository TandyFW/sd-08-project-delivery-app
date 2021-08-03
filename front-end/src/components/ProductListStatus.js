import React from 'react';
import PropTypes from 'prop-types';
import {
  StyledProductListHeader,
  Item,
  Description,
  DateContainer,
  StatusTag,
  DeliveredButton,
} from '../styles/components/ProductListStatus';

const ID_LENGTH = 4;

const ProductListStatus = ({ order, testId }) => {
  const { id, name, saleDate, status } = order;
  return (
    <StyledProductListHeader>
      <Item data-testid={ `${testId}__element-order-details-label-order-id` }>
        {`Pedido ${String(id).padStart(ID_LENGTH, '0')}`}
      </Item>
      <Description data-testid={ `${testId}__element-order-details-label-seller-name` }>
        {`P.Vend: ${name}`}
      </Description>
      <DateContainer data-testid={ `${testId}__element-order-details-label-order-date` }>
        { new Date(saleDate).toLocaleString('pt-br').split(' ')[0] }
      </DateContainer>
      <StatusTag
        status={ status }
        data-testid={ `${testId}__element-order-details-label-delivery-status` }
      >
        { status }
      </StatusTag>
      <DeliveredButton
        data-testid={ `${testId}__button-delivery-check` }
        disabled
      >
        Marcar como entregue
      </DeliveredButton>
    </StyledProductListHeader>
  );
};

ProductListStatus.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  testId: PropTypes.string.isRequired,
};

export default ProductListStatus;
