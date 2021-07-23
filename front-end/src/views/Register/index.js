import React, { useState } from 'react';
import './styles.css';

function Register() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  function checkInputs() {
    const PASSWORD_MIN_LENGTH = 6;
    const re = /.+@[A-z]+[.]com/;
    if (password.length >= PASSWORD_MIN_LENGTH && re.test(email)) {
      return false;
    }
    return true;
  }
  return (
    <div className="main-wrapper">
      <h2>Cadastro</h2>
      <div className="content">
        <input
          data-testid="common_register__input-name"
          type="text"
          placeholder="Seu Nome"
        />
        <input
          data-testid="common_register__input-email"
          type="text"
          placeholder="seu-email@teste.com.br"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          data-testid="common_register__input-password"
          type="password"
          placeholder="******"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          data-testid="common_register__button-register"
          type="button"
          disabled={ checkInputs() }
        >
          CADASTRAR
        </button>
      </div>
    </div>
  );
}

export default Register;
