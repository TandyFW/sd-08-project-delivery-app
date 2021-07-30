import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
`;
export const Form = styled.div`
  padding: 10px;
  color: black;
  margin-bottom: 10px;
  margin-top: 60px;
  font-size: 18px;
  text-align: center;
`;
export const ContainerDiv = styled.div`
  display: inline-block;
  padding: 10px;
  color: black;
  font-size: 18px;
`;
export const Title = styled.h1`
  padding: 10px;
  color: black;
  font-size: 18px;
  font-weight: bold;
  text-align: left;
`;
export const Paragraph = styled.p`
  color: black;
  font-size: 17px;
  text-align: left;
`;
export const ContainerLabel = styled.label`
  padding: 10px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  font-weight: bold;
  text-align: center;
`;
export const ContainerName = styled.input`
  padding: 5px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  width: 200px;
`;
export const ContainerEmail = styled.input`
  padding: 5px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  width: 200px;
`;
export const ContainerPassword = styled.input`
  padding: 5px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  width: 200px;
`;
export const ContainerSelect = styled.select`
  padding: 5px;
  color: black;
  margin-bottom: 15px;
  font-size: 18px;
  text-align: center;
  width: 200px;
`;
export const FinalizeRegister = styled.button`
  background-color: #216844;
  border-radius: 8px;
  padding: 10px;
  color: white;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 18px;
  &:hover {
    background-color: #298859;
    color: white;
  }
`;
