import md5 from 'md5';
import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';

export default function FormRegister() {
  const [isValid, setIsValid] = useState(false);
  const [currentName, setCurrentName] = useState('');
  const [currentEmail, setCurrentEmail] = useState('');
  const [encryptPassword, setEncryptPassword] = useState('');
  const [showMessage, setShowMessage] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const validation = () => {
    const nameInput = document.querySelector('#register-name');
    const emailInput = document.querySelector('#register-email');
    const passwordInput = document.querySelector('#register-password');
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    const MIN_NAME_LENGTH = 12;
    const MIN_PASSWORRD_LENGTH = 6;
    setCurrentName(name);
    setCurrentEmail(email);
    setEncryptPassword(md5(password));
    if (
      !emailVerify(email)
      || password.length < MIN_PASSWORRD_LENGTH
      || name.length < MIN_NAME_LENGTH
    ) {
      setIsValid(false);
    }
    if (
      emailVerify(email)
      && password.length >= MIN_PASSWORRD_LENGTH
      && name.length >= MIN_NAME_LENGTH
    ) {
      setIsValid(true);
    }
  };

  const register = async () => {
    try {
      await registerUser(currentName, currentEmail, encryptPassword);
      setShowMessage(false);
      setRedirect(true);
    } catch (err) {
      setShowMessage(true);
    }
  };

  return (
    <>
      <form action="" method="POST" className="form-register">
        <label htmlFor="register-name" className="register-label">
          Nome:
          <input
            type="name"
            maxLength="30"
            placeholder="Digite aqui seu name"
            className="name-input"
            onKeyUp={ validation }
            autoComplete="username"
            id="register-name"
            data-testid="common_register__input-name"
          />
        </label>
        <label htmlFor="register-email" className="register-label">
          Email:
          <input
            type="email"
            maxLength="30"
            placeholder="Digite aqui seu email"
            className="email-input"
            onKeyUp={ validation }
            autoComplete="username"
            id="register-email"
            data-testid="common_register__input-email"
          />
        </label>
        <label htmlFor="register-password" className="register-label">
          Senha:
          <input
            type="password"
            maxLength="30"
            placeholder="Digite aqui sua senha"
            className="password-input"
            onKeyUp={ validation }
            autoComplete="current-password"
            id="register-password"
            data-testid="common_register__input-password"
          />
        </label>
        <button
          type="submit"
          className="btn-register"
          disabled={ !isValid }
          onClick={ register }
          id="btn-register"
          data-testid="common_register__button-register"
        >
          CADASTRAR
        </button>
      </form>
      {showMessage
        && (
          <p
            className="error-message"
            data-testid="common_register__element-invalid_register"
          >
            Usuário não encontrado.
          </p>)}
      {redirect && <Redirect to="/login" />}
    </>
  );
}
