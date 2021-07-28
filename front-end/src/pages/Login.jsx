import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [visible, setVisible] = useState('hidden');
  const history = useHistory();

  function verifyFieldsValidation() {
    const PASSWORD_MIN_LENGTH = 6;
    const re = /.+@[A-z]+[.]com/;
    if (password.length >= PASSWORD_MIN_LENGTH && re.test(email)) {
      return false;
    }
    return true;
  }

  const login = async () => {
    try {
      await axios({
        method: 'POST',
        url: 'http://localhost:3001/login',
        headers: { 'Content-Type': 'application/json' },
        data: { email, password },
      });
      history.push('/customer/products');
    } catch (error) {
      setVisible('visible');
    }
  };

  return (
    <>
      <div>
        Login
        <input
          type="email"
          data-testid="common_login__input-email"
          placeholder="email@trybeer.com.br"
          onChange={ ({ target: { value } }) => setEmail(value) }
        />
        Senha
        <input
          data-testid="common_login__input-password"
          type="password"
          placeholder="********"
          onChange={ ({ target: { value } }) => setPassword(value) }
        />
      </div>
      <div>
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ verifyFieldsValidation() }
          onClick={ login }
        >
          LOGIN
        </button>
        <button
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
        <span
          data-testid="common_login__element-invalid-email"
          style={ { visibility: visible } }
        >
          Usuário não encontrado!
        </span>
      </div>
    </>
  );
}

export default Login;
