import styled from 'styled-components';

export const Wrapper = styled.div`
  background-color: #eaf1ef;
  border: 1px solid #b1c2be;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.25);
  display: inline-flex;
`;

export const Paragraph = styled.p`
  background-color: rgba(242, 255, 252, 0.75);
  border: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  font-weight: 700;
  padding: 10px;
  text-align: center;
`;

export const OrderWrapper = styled.div`
  align-items: center;
  background-color: white;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px;
  width: 100px;
`;

export const OrderLabel = styled.p`
  font-size: 0.65rem;
`;

export const Body = styled.div`
  display: flex;
`;

export const PriceDataWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  margin-left: 5px;

  > *:not( :last-child ) {
    margin-bottom: 5px;
  }
`;

export const Address = styled.div`
  align-items: center;
  display: flex;
  font-size: 0.7rem;
  justify-content: flex-end;
  padding: 5px 0;
`;

export const BodyWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 5px;

  > *:not( :last-child ) {
    margin-bottom: 5px;
  }
`;
