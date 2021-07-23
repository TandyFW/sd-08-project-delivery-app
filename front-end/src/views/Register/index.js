import React, { useState } from 'react';
import './styles.css';

function Register() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  function checkInputs() {
    const PASSWORD_MIN_LENGTH = 6;
    const NAME_MIN_LENGTH = 12;
    const re = /.+@[A-z]+[.]com/;
    if (name.length >= NAME_MIN_LENGTH
      && password.length >= PASSWORD_MIN_LENGTH
      && re.test(email)) {
      return false;
    }
    return true;
  }
  const handleSubmit = async () => {
    const myInit = {
      method: 'POST',
      body: JSON.stringify({ name, email, password }),
    };
    const rawResponse = await fetch('localhost:3000/register', myInit);
    const data = await rawResponse.json();
    return data;
  };
  return (
    <div className="main-wrapper">
      <h2>Cadastro</h2>
      <div className="content">
        <input
          data-testid="common_register__input-name"
          type="text"
          placeholder="Seu Nome"
          onChange={ (e) => setName(e.target.value) }
        />
        <input
          data-testid="common_register__input-email"
          type="email"
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
          type="submit"
          disabled={ checkInputs() }
          onClick={ handleSubmit }
        >
          CADASTRAR
        </button>
      </div>
    </div>
  );
}

export default Register;
