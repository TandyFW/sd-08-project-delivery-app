import styled from 'styled-components';

export const Container = styled.div`
  background-color: #036B52;;
  display: flex;
  justify-content: space-between;
  margin: 0;
  height: 50px;
`;

export const RigthButtons = styled.div`
  display: flex;
  margin: 0;
`;

export const OrdersButton = styled.button`
  background-color: #2FC18C;
  padding: 10px;
  color: white;
  width: 30%;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 15px;

  &:hover {
    background-color: #6CCF9E;;
    color: white;
  }
`;

export const UserButton = styled.button`
  background-color: #7033AC;
  padding: 10px;
  color: white;
  width: 250px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 15px;

  &:hover {
    background-color: #8c5abd;
    color: white;
  }
`;

export const LogoutButton = styled.button`
  background-color: #056CF9;
  padding: 10px;
  color: white;
  width: 100px;
  border: none;
  outline: none;
  font-weight: bold;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 15px;
  
  &:hover {
    background-color: #5AAFD7;
    color: white;
  }
`;
