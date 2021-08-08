import styled from 'styled-components';

export const Container = styled.div`align-items: center;
  display: flex;
  margin-top: 20px;
`;

export const Form = styled.form`align-items: baseline;
  background-color: #f9bc60;
  border-radius: 15px;
  display: flex;
  height: 100px;
  margin: auto;
  width: 78%;

  label {
    margin-left: 20px;
  }

  select {
    border-radius: 5px;
    font-family: Poppins , sans-serif;
    font-size: x-large;
    height: 50px;
    margin-top: 5px;
    padding: 1px;
    width: 200px;
  }
`;

export const RegisterButton = styled.button`background-color: #f9bc60;
  border: 2px solid #001e1d;
  border-radius: 5px;
  color: #001e1d;
  cursor: pointer;
  font-family: Poppins , monospace;
  font-size: x-large;
  font-weight: 600;
  height: 50px;
  margin: auto;
  margin-left: 20px;
  margin-top: 35px;
  transition: 250ms;
  width: 160px;


  &:hover {
    background-color: #001e1d;
    color: #f9bc60;
  }

  &:disabled {
    background-color: white;
    border: none;
    color: grey;
    cursor: not-allowed;
    transition: none;
  }
`;

export const RegisterMessage = styled.p`background-color: #001e1d;
  border-radius: 5px;
  color: #fffffe;
  font-family: Poppins , monospace;
  font-size: medium;
  font-weight: 600;
  margin-left: 5px;
  padding: 5px 10px;
  position: absolute;
`;
