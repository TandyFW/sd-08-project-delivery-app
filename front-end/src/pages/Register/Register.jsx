import { React, useEffect, useState } from 'react';
import './Register.css';

export default function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleName = ({ target }) => {
    setName(target.value);
  };

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  useEffect(() => {
    const PASSWORD_LENGTH = 6;
    const NAME_LENGTH = 12;
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (isEmailValid.test(email)
        && password.length >= PASSWORD_LENGTH
        && name.length >= NAME_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name.length, email, password.length]);

  console.log(isDisabled);

  return (
    <div>
      <h1 className="title">Cadastro</h1>
      <form className="register-form">
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            data-testid="common_register__input-name"
            placeholder="Seu nome"
            onChange={ handleName }
            value={ name }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
            onChange={ handleEmail }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="common_register__input-password"
            placeholder="**********"
            onChange={ handlePassword }
            value={ password }
          />
        </label>
        <button
          type="submit"
          // className="register-button"
          data-testid="common_register__button-register"
          disabled={ isDisabled }
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
