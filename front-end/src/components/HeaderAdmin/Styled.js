import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin: 0;
`;

export const ManageUsers = styled.div`
  text-align: center;
  background-color: #3FBF7F;
  padding: 10px;
  color: black;
  width: 20%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  transition: 0.2s ease all;
  font-size: 15px;
`;

export const None = styled.div`
  background-color: #216844;
  padding: 10px;
  color: white;
  width: 50%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  transition: 0.2s ease all;
  font-size: 15px;
`;

export const NameAdmin = styled.div`
  text-align: center;
  background-color: #7033AC;
  padding: 10px;
  color: white;
  width: 20%;
  border: none;
  outline: none;
  font-weight: bold;
  margin-bottom: 15px;
  transition: 0.2s ease all;
  font-size: 15px;
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
