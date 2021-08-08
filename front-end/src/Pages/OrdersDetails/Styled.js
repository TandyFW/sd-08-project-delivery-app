import styled from 'styled-components';

export const Container = styled.div`
  background-color: #f6f2df;
  color: #2e1b0f;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
`;

export const ProductsCustomerContainer = styled.div`
  align-items: center;
  background-color: #f6f2df;
  color: #2e1b0f;
  margin: auto;
`;

export const DeliveredCheckButton = styled.button`
  /* background-color: #35c85c;*/
  border-radius: 5px;
  padding: 5px;
  color: #2e1b0f;
  width: 20%;
  font-weight: 700;
  text-align: center;

  &:hover {
    background-color: #9D5C32;
    color: white;
  }
`;

export const HeaderOrderStatus = styled.div`
  align-items: center;
  background-color: white;
  border-radius: 5px;
  display: flex;
  font-weight: 700;
  justify-content: space-between;
  padding: 5px;
  margin-left: 40px;
  width: 94%;
`;

export const BodyItensOrders = styled.div`
  width: 100%;
`;

export const HeaderTitle = styled.h3`
  margin-left: 40px;
`;
