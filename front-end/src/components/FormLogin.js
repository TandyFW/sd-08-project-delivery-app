import md5 from 'md5';
import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import fetchUser from '../services/fetchUser';
import emailVerify from '../utils/functions';

export default function FormLogin() {
  const [isValid, setIsValid] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('');
  const [encryptPassword, setEncryptPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const validation = () => {
    const emailInput = document.querySelector('#login-email');
    const passwordInput = document.querySelector('#login-password');
    const email = emailInput.value;
    const password = passwordInput.value;
    const MIN_PASSWORRD_LENGTH = 6;
    setCurrentEmail(email);
    setEncryptPassword(md5(password));
    if (!emailVerify(email) || password.length < MIN_PASSWORRD_LENGTH) {
      setIsValid(false);
    }
    if (emailVerify(email) && password.length >= MIN_PASSWORRD_LENGTH) {
      setIsValid(true);
    }
  };

  const login = async () => {
    const user = await fetchUser(currentEmail, encryptPassword);
    if (user) {
      setShowMessage(false);
      setRedirect(true);
    }
    setShowMessage(true);
  };

  return (
    <>
      <form action="" method="GET" className="form-login">
        <label htmlFor="login-email" className="login-label">
          Email:
          <input
            type="email"
            maxLength="30"
            placeholder="Digite aqui seu email"
            className="email-input"
            onKeyUp={ validation }
            autoComplete="username"
            id="login-email"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="login-password" className="login-label">
          Senha:
          <input
            type="password"
            maxLength="30"
            placeholder="Digite aqui sua senha"
            className="password-input"
            onKeyUp={ validation }
            autoComplete="current-password"
            id="login-password"
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="submit"
          className="btn-login"
          disabled={ !isValid }
          onClick={ login }
          id="btn-login"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          className="btn-link-register"
          id="btn-link-register"
          data-testid="common_login__button-register"
        >
          <Link to="/register">REGISTRE-SE</Link>
        </button>
      </form>
      {showMessage && <p className="error-message" data-testid="common_login__element-invalid-email">Usuário não encontrado.</p>}
      {redirect && <Redirect to="/customer/products" />}
    </>
  );
}
