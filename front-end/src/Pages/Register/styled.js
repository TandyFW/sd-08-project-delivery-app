import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 400px;
`;

export const ContainerForm = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
`;

export const AreaTitle = styled.div`
  align-items: center;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  width: 100%;
`;
export const CadastroTitle = styled.h1`
  text-align: center;
`;
export const FormContainer = styled.form`
  align-items: center;
  border-bottom: 2px solid black;
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: center;
  width: 80%;
`;

export const NameInput = styled.input`
  padding: 10px;
  border-radius: 5px;
  outline: none;
  margin-bottom: 15px;
`;
export const LoginInput = styled.input`
  border-radius: 5px;
  padding: 10px;
  margin-bottom: 15px;
  outline: none;
`;
export const PasswordInput = styled.input`
  border-radius: 5px;
  margin-bottom: 15px;
  outline: none;
  padding: 10px;
`;

export const SubmitButton = styled.button`
  background-color: green;
  border: none;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 15px;
  outline: none;
  padding: 10px;
  transition: 0.2s ease all;
  width: 200px;

  &:hover {
    background-color: white;
    color: green;
  }
`;

export const NameLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 7px;
  margin-right: 150px;
`;
export const EmailLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 7px;
  margin-right: 150px;
`;
export const PassLabel = styled.label`
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 7px;
  margin-right: 120px;
`;
