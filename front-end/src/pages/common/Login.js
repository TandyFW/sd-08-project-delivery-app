import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import * as api from '../../services/api';
import UserContext from '../../context/UserContext';
import Input from '../../components/Input/Input';
import { ButtonPrimary, ButtonTertiary } from '../../components/Input/Button';
import { LoginContainer, StyledContainer } from '../../styles/pages/common/Login';

function Login() {
  const [localEmail, setLocalEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const { setName, setEmail, setRole, setToken } = useContext(UserContext);

  const history = useHistory();

  const isDisabled = () => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const minOfCaracteres = 6;
    return !validEmail.test(localEmail) || password.length < minOfCaracteres;
  };

  async function handleClick() {
    try {
      const { name, email, role, token } = await api.login(localEmail, password);
      localStorage.setItem('user', JSON.stringify({ name, email, role, token }));
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
      <StyledContainer>
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
      </StyledContainer>
    </LoginContainer>
  );
}

export default Login;
