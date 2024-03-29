import styled from 'styled-components';

export const Container = styled.div`
  min-width: 900px;
  h4 {
    text-align: center;
  }
`;

export const DetailsContainer = styled.div`
  strong {
    padding-left: 15px;
    margin-left: 10px;
    margin-right: -2px;
  }
  .total-order {
    margin-left: 10px;
    margin-top: 10px;
    border-radius: 5px;
    color: white;
    display: inline-block;
    background-color: rgb(2, 51, 10);
  }
  width: 90%;
  height: auto;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin: auto;
  padding-bottom: 20px;
`;
export const DetailsBar = styled.div`
  span {
    margin-left: 10px;
    margin-right: -15px;
  }
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.color};
`;
export const LabelInfo = styled.div`
  display: inline-block;
  padding: 10px 15px;
  border-radius: 5px;
  font-weight: bold;
  margin: 0 5px;
  background-color: ${(props) => props.color};
`;
export const OrderButton = styled.button`
  background-color: ${(props) => props.color};
  cursor: pointer;
  color: white;
  outline: none;
  margin: 0 20px;
  padding: 10px 15px;
  border-color: ${(props) => props.color};
  border-radius: 5px;
`;
export const ListHeader = styled.div`
  &.user-list {
    grid-template-columns: 1fr 4fr 5fr 3fr 2fr;
  }
  span {
    text-align: center;
  }
  width: 90%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 8fr 2fr 2fr 2fr;
`;
export const ErrorMessage = styled.div`
  width: 90%;
  margin: 10px auto;
  padding: 10px;
  color: white;
  font-weight: bold;
  text-align: center;
  background-color: red;
`;
