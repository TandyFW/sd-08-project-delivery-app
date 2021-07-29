import styled from 'styled-components';

export const Container = styled.div`
  min-width: 900px;
  h4 {
    text-align: center;
  }
`;
export const NewUserContainer = styled.div`
  justify-content: center;
  width: 90%;
  height: auto;
  box-shadow: 1px 1px 3px rgba(0, 0, 0, 0.5);
  margin: auto;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
`;
export const Input = styled.input`
  margin: 10px;
  padding: 10px;
`;
export const Select = styled.select`
  margin: 10px;
  padding-left: 10px;
  font-weight: bold;
  font-size: 18px;
`;
export const ButtonRegister = styled.button`
  margin: 10px;
  color: white;
  font-size: 18px;
  font-weight: bold;
  cursor: ${(props) => (!props.disabled ? 'pointer' : 'not-allowed')};
  background-color: ${(props) => (!props.disabled ? props.color : 'gray')};
`;
