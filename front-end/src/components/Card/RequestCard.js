import React from 'react';
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

const RequestCard = ({ showAddress = false } = {}) => (
  <Wrapper>
    <OrderWrapper>
      <OrderLabel>Pedido</OrderLabel>
      <p>0001</p>
    </OrderWrapper>
    <BodyWrapper>
      <Body>
        <RequestStatusTag status="delivered">Entregue</RequestStatusTag>
        <PriceDataWrapper>
          <Paragraph>DD/MM/AA</Paragraph>
          <Paragraph>RS 01,99</Paragraph>
        </PriceDataWrapper>
      </Body>
      { showAddress && <Address>Meu endereço</Address> }
    </BodyWrapper>
  </Wrapper>
);

RequestCard.propTypes = {
  showAddress: PropTypes.bool.isRequired,
};

export default RequestCard;
