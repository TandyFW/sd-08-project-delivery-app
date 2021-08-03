import styled from 'styled-components';

export const Container = styled.ul`
  display: flex;
  justify-content: center;;
`;
export const ContainerItem = styled.div`
  background-color: #3FBF7F;
  padding: 10px;
  color: black;
  width: 25px;
  font-weight: bold;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center;
`;
export const ContainerName = styled.div`
  background-color: #EFEFF0;
  padding: 10px;
  color: black;
  width: 300px;
  margin-bottom: 15px;
  font-size: 18px;
`;
export const ContainerEmail = styled.div`
  background-color: #216844;
  padding: 10px;
  color: white;
  width: 300px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
export const ContainerType = styled.div`
  background-color: #7033AC;
  padding: 10px;
  color: white;
  width: 200px;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
export const DeleteItem = styled.button`
  background-color: #319CCD;
  padding: 10px;
  color: white;
  width: 120px;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;
  &:hover {
    background-color: #5AAFD7;
    color: white;
  }
`;
