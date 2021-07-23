import styled from 'styled-components';

export const LoginForm = styled.form`align-items: center;
  border-left: solid 2px ${(props) => props.theme.colors.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10px;
  width: 300px;

  .MuiFormControl-root {
    margin: 10px 0;
    width: 100%;
  }

  .MuiButtonBase-root {
    background-color: ${(props) => props.theme.colors.primary};
    margin: 10px 0;
    width: 100%;
  }

  .MuiButtonBase-root:hover {
    background-color: ${(props) => props.theme.colors.primary};
    filter: brightness(1.2);
  }
`;

export const LoginPage = styled.div`align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
`;
