import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;
`;
export const ContainerItem = styled.div`
  background-color: #FF914D;
  border-radius: 6px 0 0 6px;
  padding: 10px;
  color: black;
  width: 35px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;
export const ContainerDescription = styled.div`
  background-color: #EFEFF0;
  padding: 10px;
  color: black;
  width: 550px;
  margin-bottom: 15px;
  font-size: 20px;
`;
export const ContainerQuantity = styled.div`
  background-color: #E8DCA9;
  padding: 10px;
  color: black;
  width: 110px;
  margin-bottom: 15px;
  text-align: center;
`;
export const ContainerUnitValue = styled.div`
  background-color: #35C85C;
  padding: 10px;
  color: black;
  width: 120px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;
export const ContainerTotalValue = styled.div`
  background-color: #9D5C32;
  padding: 10px;
  color: black;
  width: 120px;
  margin-bottom: 15px;
  font-size: 20px;
  text-align: center;
`;
export const DeleteItem = styled.button`
  background-color: #FF7070;
  border-radius: 0 6px 5px 0;
  padding: 10px;
  color: black;
  width: 15%;
  border: none;
  outline: none;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.5s ease all;
  font-size: 20px;
  &:hover {
    background-color: #FF3333;
    color: white;
  }
`;
