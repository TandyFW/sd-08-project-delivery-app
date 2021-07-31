import styled from 'styled-components';

export const Container = styled.div`
  &.user-item {
    grid-template-columns: 1fr 4fr 5fr 3fr 2fr;
  }
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  width: 90%;
  margin: 10px auto;
  display: grid;
  grid-template-columns: 1fr 8fr 2fr 2fr 2fr;
`;
export const Field = styled.div`
  span {
    margin-left: 5px;
  }
  text-align: ${(props) => (props.center ? 'center' : 'left')};
  font-weight: bold;
  color: ${(props) => props.txtColor};
  padding: 10px;
  background-color: ${(props) => props.color};
`;
export const ActionButton = styled.button`
  background-color: ${(props) => props.color};
  cursor: pointer;
  color: white;
  font-weight: bold;
`;
