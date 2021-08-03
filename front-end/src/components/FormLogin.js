import md5 from 'md5';
import React, { useEffect, useState, useContext } from 'react';
import { Link, Redirect } from 'react-router-dom';
import DeliveryAppContext from '../context/DeliveryAppContext';
import fetchUser from '../services/fetchUser';
import emailVerify from '../utils/functions';

export default function FormLogin() {
  const { setUser } = useContext(DeliveryAppContext);
  const [isValid, setIsValid] = useState(false);
  const [currentEmail, setCurrentEmail] = useState('');
  const [encryptPassword, setEncryptPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);
  const [URL, setURL] = useState('');

  const validation = () => {
    const emailInput = document.querySelector('#loginEmail');
    const passwordInput = document.querySelector('#loginPassword');
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

  const redirectToggle = () => {
    if (URL.length) setRedirect(true);
  };

  useEffect(() => redirectToggle(), [URL]);

  const login = async (e) => {
    e.preventDefault();
    const user = await fetchUser(currentEmail, encryptPassword);

    if (user) {
      setUser(user);
      setShowMessage(false);
      switch (user.role) {
      case 'customer':
        return setURL('/customer/products');
      case 'seller':
        return setURL('/seller/products');
      case 'admin':
        return setURL('/admin/manage');
      default:
        break;
      }
    }
    setShowMessage(true);
  };

  return (
    <>
      <form action="" method="POST" className="form-login">
        <label htmlFor="loginEmail" className="login-label">
          Email:
          <input
            type="email"
            maxLength="30"
            placeholder="Digite aqui seu email"
            className="email-input"
            onKeyUp={ validation }
            autoComplete="username"
            id="loginEmail"
            data-testid="common_login__input-email"
          />
        </label>
        <label htmlFor="loginPassword" className="login-label">
          Senha:
          <input
            type="password"
            maxLength="30"
            placeholder="Digite aqui sua senha"
            className="password-input"
            onKeyUp={ validation }
            autoComplete="current-password"
            id="loginPassword"
            data-testid="common_login__input-password"
          />
        </label>
        <button
          type="button"
          className="btn-login"
          disabled={ !isValid }
          onClick={ login }
          id="btnLogin"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="button"
          className="btn-link-register"
          id="btnLinkRegister"
          data-testid="common_login__button-register"
        >
          <Link to="/register">REGISTRE-SE</Link>
        </button>
      </form>
      {showMessage
        && (
          <p
            className="error-message"
            data-testid="common_login__element-invalid-email"
          >
            Usuário não encontrado.
          </p>)}
      {redirect && <Redirect to={ URL } />}
    </>
  );
}
