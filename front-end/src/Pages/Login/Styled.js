import styled from 'styled-components';

export const Container = styled.div`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  background: url("https://w7.pngwing.com/pngs/469/1014/png-transparent-pilsner-glass-illustration-pint-glass-beer-drawing-table-glass-color-fresco-watercolor-painting-glass-wine-glass.png");
  background-repeat: no-repeat;
  background-position: center;
  
`;
export const InnerContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 700px;
  width: 400px;
`;
export const ProfileImage = styled.img`
  background: url(https://www.collinsdictionary.com/images/full/beer_123784216.jpg);
  background-position: center;
  background-size: 150px;
  border: 2px dashed black;
  cursor: pointer;
  height: 150px;
  transition: 0.2s ease all;
  width: 150px;
  &:hover {
    opacity: 0.5;
  }
`;
export const AppName = styled.h1``;
export const AreaImage = styled.div`
  align-items: center;
  border-bottom: 1px solid black;
  display: flex;
  flex-direction: column;
  height: 300px;
  justify-content: center;
  width: 100%;
`;
export const ContainerForm = styled.div`
  align-items: center;
  display: flex;
  flex: 1;
  justify-content: center;
  width: 100%;
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
export const LoginInput = styled.input`
  border-radius: 5px;
  margin-bottom: 15px;
  outline: none;
  padding: 10px;
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
  font-weight: bold;
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
export const RegisterButton = styled.button`
  background-color: white;
  border: 1px solid green;
  border-radius: 5px;
  color: green;
  cursor: pointer;
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 15px;
  outline: none;
  padding: 10px;
  transition: all ease 0.5s;
  width: 200px;
  &:hover {
    background-color: green;
    color: white;
  }
`;
export const LoginLabel = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 7px;
  margin-right: 150px;
`;
export const PassLabel = styled.label`
  font-size: 15px;
  font-weight: bold;
  margin-bottom: 7px;
  margin-right: 120px;
`;
export const InvalidBox = styled.div``;
