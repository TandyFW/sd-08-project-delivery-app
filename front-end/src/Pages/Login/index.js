import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import {
  Container,
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
} from './Styled';
import api from '../../Apis/api1';

const redirectLoggedUser = (user, history) => {
  if (user.role === 'customer') return history.push('/customer/products');
  if (user.role === 'seller') return history.push('/seller/orders');
  if (user.role === 'administrator') return history.push('/admin/manage');
};

const Login = () => {
  const history = useHistory();
  const user = JSON.parse(localStorage.getItem('user'));
  if (user) redirectLoggedUser(user, history);

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [valid, setValid] = useState(true);
  const [logged, setLogged] = useState(true);

  useEffect(() => {
    const PASSLENGHT = 6;
    const regex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    if (regex.test(email) && pass.length >= PASSLENGHT) {
      setValid(false);
    } else {
      setValid(true);
    }
  }, [email, pass]);

  const submitHandler = async (e) => {
    const STATUSOK = 200;
    e.preventDefault();
    const result = await api.loginFetch(email, pass)
      .then((data) => {
        localStorage.setItem('user', JSON.stringify(data.data));
        return data;
      })
      .catch((err) => err.message);
    if (result.status !== STATUSOK) {
      setLogged(false);
    } else {
      setLogged(true);
      if (result.data.role === 'customer') return history.push('/customer/products');
      if (result.data.role === 'seller') return history.push('/seller/orders');
      return history.push('/admin/manage');
    }
  };

  return (
    <Container>
      <InnerContainer>
        <AreaImage>
          <ProfileImage src="https://i.pinimg.com/originals/bd/d4/8a/bdd48a385d53511c6248594eedb3560d.png" />
          <AppName>
            ASDSAD
          </AppName>
        </AreaImage>
        <ContainerForm>
          <FormContainer onSubmit={ submitHandler }>
            <LoginLabel>
              Login:
            </LoginLabel>
            <LoginInput
              type="text"
              onChange={ ({ target }) => setEmail(target.value) }
              data-testid="common_login__input-email"
              placeholder="email@trybeer.com"
              name="email"
            />
            <PassLabel>
              Password:
            </PassLabel>
            <PasswordInput
              type="password"
              onChange={ ({ target }) => setPass(target.value) }
              data-testid="common_login__input-password"
              placeholder="*******"
              name="password"
            />
            <SubmitButton
              type="submit"
              disabled={ valid }
              data-testid="common_login__button-login"

            >
              Send
            </SubmitButton>
            <RegisterButton
              onClick={ () => history.push('/register') }
              data-testid="common_login__button-register"
            >
              Ainda não tem conta?
            </RegisterButton>
          </FormContainer>
          {logged === false
          && <p data-testid="common_login__element-invalid-email">aa</p>}
        </ContainerForm>
      </InnerContainer>
    </Container>
  );
};

export default Login;