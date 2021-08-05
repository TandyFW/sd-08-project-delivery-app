import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import io from '../sockets';
import {
  StyledProductListHeader,
  Item,
  Description,
  DateContainer,
  StatusTag,
  ListButtonPrimary,
} from '../styles/components/ProductListStatus';

const ID_LENGTH = 4;

const ProductListStatus = ({ order, testId, updateOrderStatus }) => {
  const { id, name, saleDate, status } = order;

  const handleDelivered = () => {
    io.emit('deliveredOrder', id);
  };

  useEffect(() => {
    io.on('refreshOrder', (newStatus) => {
      console.log(newStatus);
      updateOrderStatus(newStatus);
    });

    return () => {
      io.removeAllListeners('refreshOrder');
    };
  }, [updateOrderStatus, order]);

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
      <ListButtonPrimary
        data-testid={ `${testId}__button-delivery-check` }
        onClick={ handleDelivered }
        disabled={ status !== 'Em Trânsito' }
      >
        Marcar como entregue
      </ListButtonPrimary>
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
  updateOrderStatus: PropTypes.func.isRequired,
};

export default ProductListStatus;
