import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import * as api from '../services/api';
import DeliveryContext from '../context/DeliveryContext';
import FormContainer from '../components/FormContainer';
import Input from '../components/Input';
import { ButtonPrimary, ButtonTertiary } from '../components/Button';

const LoginContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const StyledFormContainer = styled(FormContainer)`
  display: flex;
  width: 500px;
`;

function Login() {
  const [localEmail, setLocalEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const { setName, setEmail, setRole, setToken } = useContext(DeliveryContext);

  const history = useHistory();

  const isDisabled = () => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const minOfCaracteres = 6;
    return !validEmail.test(localEmail) || password.length < minOfCaracteres;
  };

  async function handleClick() {
    try {
      const { name, email, role, token } = await api.login(localEmail, password);
      setName(name);
      setEmail(email);
      setRole(role);
      setToken(token);
      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      setShowWarning(true);
    }
  }

  return (
    <LoginContainer>
      <StyledFormContainer>
        <Input
          type="text"
          data-testid="common_login__input-email"
          placeholder="Email"
          value={ localEmail }
          onChange={ ({ target }) => setLocalEmail(target.value) }
        />

        <Input
          type="password"
          data-testid="common_login__input-password"
          placeholder="Senha"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />

        <ButtonPrimary
          type="button"
          data-testid="common_login__button-login"
          disabled={ isDisabled() }
          onClick={ handleClick }
        >
          LOGIN
        </ButtonPrimary>

        <ButtonTertiary
          type="button"
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </ButtonTertiary>

        { showWarning
          && <p data-testid="common_login__element-invalid-email">Deu ruim!</p> }
      </StyledFormContainer>
    </LoginContainer>
  );
}

export default Login;
