import styled from 'styled-components';

export const LoginForm = styled.form`align-items: center;
  border-left: solid 2px ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 30px;
  width: 300px;

  .MuiFormControl-root {
    margin: 10px 0;
    width: 100%;
  }

  .MuiButtonBase-root {
    background-color: ${(props) => props.theme.colors.primary};
    font-weight: 550;
    margin: 10px 0;
    width: 100%;
  }

  .MuiButtonBase-root:hover {
    background-color: ${(props) => props.theme.colors.primary};
    filter: brightness(1.2);
  }

  .MuiButtonBase-root:nth-child( 2n ) {
    background-color: white;
    border: 2px solid ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const LoginPage = styled.div`align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;

export const ErrorMessage = styled.div`align-items: center;
  color: red;
  background: rgb(200,200,200);
  padding: 30px;
  position: absolute;
  z-index: 1;
`;
