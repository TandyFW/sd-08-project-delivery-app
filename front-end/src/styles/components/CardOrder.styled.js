import styled from 'styled-components';

export const CardOrderContainer = styled.div`
  .info {
    display: grid;
    grid-template-columns: 1fr 3fr 2fr;
    gap: 5px;
  }
  .order-number {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
  }
  .order-address {
    padding-top: 10px;
    color: blue;
    font-weight: bold;
    text-align: center;
  }
  .price-date {
    display: flex;
    font-size: 20px;
    font-weight: bold;
    flex-direction: column;
    text-align: center;
    span {
      margin-bottom: 10px;
    }
  }
  background-color: ${(props) => props.color};
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  padding: 10px;
  cursor: pointer;
`;
export const OrderStatus = styled.div`
  padding: 20px;
  border-radius: 10px;
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  background-color: ${(props) => props.color};
`;
