import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const ProductsButton = styled.button`
  background-color: #3FBF7F;
  padding: 10px;
  color: black;
  width: 20%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 15px;

  &:hover {
    background-color: #6CCF9E;
    color: black;
  }
`;

export const OrdersButton = styled.button`
  background-color: #216844;
  padding: 10px;
  color: white;
  width: 50%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 15px;

  &:hover {
    background-color: #298859;
    color: white;
  }
`;

export const UserButton = styled.button`
  background-color: #7033AC;
  padding: 10px;
  color: white;
  width: 20%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 15px;

  &:hover {
    background-color: #9156CC;
    color: white;
  }
`;

export const LogoutButton = styled.button`
  background-color: #319CCD;
  padding: 10px;
  color: white;
  width: 10%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  cursor: pointer;
  transition: 0.2s ease all;
  font-size: 15px;
  
  &:hover {
    background-color: #5AAFD7;
    color: white;
  }
`;
