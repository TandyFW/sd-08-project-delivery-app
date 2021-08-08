import styled from 'styled-components';

export const OrderDetailsBody = styled.div`align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 20px;
  padding: 20px;
`;

export const TotalPrice = styled.p`align-self: flex-end;
  background: ${({ theme }) => theme.colors.primary};
  border-radius: 6px;
  color: white;
  font-size: 20px;
  font-weight: 550;
  margin: 5px 0;
  padding: 10px 20px;

  span {
    margin: 0 5px;
  }
`;
