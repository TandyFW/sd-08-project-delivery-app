import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import * as api from '../services/api';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const setToken = useLocalStorage('token')[1];
  const [showWarning, setShowWarning] = useState(false);

  const history = useHistory();

  const isDisabled = () => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const minOfCaracteres = 6;
    return !validEmail.test(email) || password.length < minOfCaracteres;
  };

  async function handleClick() {
    api.login(email, password)
      .then((result) => {
        setToken(result.token);
        history.push('/customer/products');
      })
      .catch(() => {
        setShowWarning(true);
      });
  }

  return (
    <fieldset>
      <input
        type="text"
        data-testid="common_login__input-email"
        placeholder="Email"
        value={ email }
        onChange={ ({ target }) => setEmail(target.value) }
      />

      <input
        type="password"
        data-testid="common_login__input-password"
        placeholder="Senha"
        value={ password }
        onChange={ ({ target }) => setPassword(target.value) }
      />

      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ isDisabled() }
        onClick={ handleClick }
      >
        LOGIN
      </button>

      <button
        type="button"
        data-testid="common_login__button-register"
        onClick={ () => history.push('/register') }
      >
        Ainda não tenho conta
      </button>

      { showWarning
        && <p data-testid="common_login__element-invalid-email">Deu ruim!</p> }
    </fieldset>
  );
}

export default Login;
