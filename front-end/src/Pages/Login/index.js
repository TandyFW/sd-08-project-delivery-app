import React from 'react';
import
{ Container,
  InnerContainer,
  AreaImage,
  ContainerForm,
  AppName,
  ProfileImage,
  FormContainer,
  LoginInput,
  PasswordInput,
  SubmitButton,
  RegisterButton,
  LoginLabel,
  PassLabel,
  /* InvalidBox, */
} from './Styled';

const Login = () => (
  <Container>
    <InnerContainer>
      <AreaImage>
        <ProfileImage src="https://i.pinimg.com/originals/bd/d4/8a/bdd48a385d53511c6248594eedb3560d.png" />
        <AppName>
          ASDSAD
        </AppName>
      </AreaImage>
      <ContainerForm>
        <FormContainer>
          <LoginLabel>
            Login:
          </LoginLabel>
          <LoginInput
            data-testid="common_login__input-email"
            placeholder="email@trybeer.com"
          />
          <PassLabel>
            Password:
          </PassLabel>
          <PasswordInput
            data-testid="common_login__input-password"
            placeholder="*******"
          />
          <SubmitButton
            disabled
            data-testid="common_login__button-login"
          >
            Send
          </SubmitButton>
          <RegisterButton data-testid="common_login__button-register">
            Ainda não tem conta?
          </RegisterButton>
        </FormContainer>
      </ContainerForm>
    </InnerContainer>
  </Container>
);

export default Login;
