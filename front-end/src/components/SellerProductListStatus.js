import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {
  StyledProductListHeader,
  Item,
  DateContainer,
  StatusTag,
  ListButtonPrimary,
  ListButtonSecondary,
  Spacer,
} from '../styles/components/ProductListStatus';
import io from '../sockets';

const ID_LENGTH = 4;

const ProductListStatus = ({ order, testId, handleSetStatus }) => {
  const { id, saleDate, status } = order;

  const handlePreparing = () => {
    io.emit('prepareOrder', id);
  };

  const handleDispatch = () => {
    io.emit('dispatchOrder', id);
  };

  useEffect(() => {
    io.on('refreshOrder', (newStatus) => {
      console.log(newStatus);
      handleSetStatus(newStatus);
    });

    return () => {
      io.removeAllListeners('refreshOrder');
    };
  }, [handleSetStatus]);

  return (
    <StyledProductListHeader>
      <Item data-testid={ `${testId}__element-order-details-label-order-id` }>
        {`Pedido ${String(id).padStart(ID_LENGTH, '0')}`}
      </Item>
      <DateContainer data-testid={ `${testId}__element-order-details-label-order-date` }>
        { new Date(saleDate).toLocaleString('pt-br').split(' ')[0] }
      </DateContainer>
      <StatusTag
        status={ status }
        data-testid={ `${testId}__element-order-details-label-delivery-status` }
      >
        { status }
      </StatusTag>
      <Spacer />
      <ListButtonSecondary
        data-testid={ `${testId}__button-preparing-check` }
        onClick={ handlePreparing }
        disabled={ status !== 'Pendente' }
      >
        Preparar pedido
      </ListButtonSecondary>
      <ListButtonPrimary
        data-testid={ `${testId}__button-dispatch-check` }
        onClick={ handleDispatch }
        disabled={ status !== 'Preparando' }
      >
        Saiu para entrega
      </ListButtonPrimary>
    </StyledProductListHeader>
  );
};

ProductListStatus.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
  }).isRequired,
  testId: PropTypes.string.isRequired,
  handleSetStatus: PropTypes.func.isRequired,
};

export default ProductListStatus;
