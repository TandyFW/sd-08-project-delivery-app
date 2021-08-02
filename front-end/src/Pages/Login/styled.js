import styled from 'styled-components';

export const LoginForm = styled.form`align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 15px 30px;
  width: 50%;

  .MuiFormControl-root {
    margin: 10px 0;
    max-width: 350px;
    width: 100%;

  }

  .MuiButtonBase-root {
    background-color: ${(props) => props.theme.colors.primary};
    font-weight: 550;
    margin: 10px 0;
    max-width: 350px;
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
