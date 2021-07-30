import styled from 'styled-components';
import React from 'react';
import ListHeader from './ListHeader';

const StyledProductListHeader = styled(ListHeader)`> * {
    display: flex;
    flex-basis: 130px;
    font-size: 1rem;
    justify-content: center;
  }
`;

const Item = styled.p`flex-basis: 70px;
`;

const Description = styled.p`flex: 1;
  justify-content: flex-start;
  padding-left: 20px;
`;

const ProductListStatus = (orders) => {
  const { orderId, sellerName, orderDate, deliveryStatus } = orders;
  return (
    <StyledProductListHeader>
      <Item>{`Pedido ${orderId}`}</Item>
      <Description>{`P.Vend: ${sellerName}`}</Description>
      <p>{orderDate}</p>
      <p>{deliveryStatus}</p>
      <button type="button">Marcar como entregue</button>
    </StyledProductListHeader>
  );
};

export default ProductListStatus;
