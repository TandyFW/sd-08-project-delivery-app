import React from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import RequestStatusTag from '../RequestStatusTag';
import {
  Wrapper,
  Paragraph,
  OrderWrapper,
  OrderLabel,
  Body,
  PriceDataWrapper,
  Address,
  BodyWrapper,
} from '../../styles/components/Card/RequestCard';

const ID_LENGTH = 4;

const RequestCard = ({ order, showAddress, testId }) => {
  const history = useHistory();
  const { id, status, saleDate, totalPrice } = order;

  const renderPriceData = () => (
    <PriceDataWrapper>
      <Paragraph data-testid={ `${testId}__element-order-date-${id}` }>
        { new Date(saleDate).toLocaleString('pt-br').split(' ')[0] }
      </Paragraph>
      <Paragraph data-testid={ `${testId}__element-card-price-${id}` }>
        {'R$ '}
        <span>
          { totalPrice
            .toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
            .replace('.', ',') }
        </span>
      </Paragraph>
    </PriceDataWrapper>
  );

  return (
    <Wrapper onClick={ () => history.push(`/customer/orders/${id}`) }>
      <OrderWrapper>
        <OrderLabel>Pedido</OrderLabel>
        <p data-testid={ `${testId}__element-order-id-${id}` }>
          { String(id).padStart(ID_LENGTH, '0') }
        </p>
      </OrderWrapper>
      <BodyWrapper>
        <Body>
          <RequestStatusTag
            status={ status }
            data-testid={ `${testId}__element-delivery-status-${id}` }
          >
            { status }
          </RequestStatusTag>
          { renderPriceData() }
        </Body>
        { showAddress && <Address>Meu endereço</Address> }
      </BodyWrapper>
    </Wrapper>
  );
};

RequestCard.defaultProps = {
  showAddress: false,
};

RequestCard.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    status: PropTypes.string,
    saleDate: PropTypes.string,
    totalPrice: PropTypes.string,
  }).isRequired,
  showAddress: PropTypes.bool,
  testId: PropTypes.string.isRequired,
};

export default RequestCard;
