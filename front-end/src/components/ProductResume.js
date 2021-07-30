import styled from 'styled-components';
import React from 'react';

const Wrapper = styled.div`
  border-radius: 8px;
  display: flex;
  overflow: hidden;

  > * {
    align-items: center;
    display: flex;
    flex-basis: 130px;
    font-size: 1.5rem;
    justify-content: center;
    padding: 10px;
  }
`;

const Id = styled.p`
  background-color: ${({ theme }) => theme.colors.secondary};
  flex-basis: 70px;
  font-weight: 700;
`;

const Name = styled.p`
  background-color: rgba(234, 241, 239, 1);
  flex: 1;
  justify-content: flex-start;
  padding-left: 20px;
`;

const Quantity = styled.p`
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 700;
`;

const UnitPrice = styled.p`
  background-color: ${({ theme }) => theme.colors.tertiary};
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 700;
`;

const SubTotal = styled.p`
  background-color: ${({ theme }) => theme.colors.quaternary};
  color: ${({ theme }) => theme.colors.lightText};
  font-weight: 700;
`;

const RemoveButton = styled.p`
  background-color: ${({ theme }) => theme.colors.secondary};
  color: ${({ theme }) => theme.colors.lightText};
  cursor: pointer;
  flex-basis: 170px;
  font-weight: 700;
`;

const ProductResume = (order, removable) => {
  const { userId, name, quantity, price, totalPrice } = order;
  return (
    <Wrapper>
      <Id>{userId}</Id>
      <Name>{name}</Name>
      <Quantity>{quantity}</Quantity>
      <UnitPrice>{price}</UnitPrice>
      <SubTotal>{totalPrice}</SubTotal>
      { removable && <RemoveButton>Remover</RemoveButton> }
    </Wrapper>
  );
};

export default ProductResume;
