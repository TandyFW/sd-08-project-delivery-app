import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createUser } from '../services/Api';
import { saveState } from '../services/LocalStorage';
import Input from '../components/Input';

import beerToastIcon from '../images/beer-toast.png';

import '../styles/Login-Register.css';

function Register() {
  const [user, setUser] = useState(undefined);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [inputValue, setInputValue] = useState({ Nome: '', Email: '', Senha: '' });
  const { Nome, Email, Senha } = inputValue;
  const MIN_NAME_LENGTH = 12;
  const MIN_PASSWORD_LENGTH = 6;
  const history = useHistory();

  const handleChange = ({ target }) => {
    setInputValue({ ...inputValue, [target.name]: target.value });
  };

  const handleClick = async () => {
    const newUser = await createUser({ name: Nome, email: Email, password: Senha });

    if (newUser) {
      setUser(newUser);
      saveState('user', newUser);
    }

    return !newUser && setShowErrorMessage(true);
  };

  const isRegisterValid = () => {
    const isNameValid = Nome.length >= MIN_NAME_LENGTH;
    const isEmailValid = /\S+@\S+\.\S+/.test(Email);
    const isPasswordValid = Senha.length >= MIN_PASSWORD_LENGTH;

    return [isNameValid, isEmailValid, isPasswordValid]
      .every((validation) => validation === true);
  };

  useEffect(() => user && history.push('/customer/products'), [user, history]);

  return (
    <>
      <div className="sign-container">
        <header>
          <img src={ beerToastIcon } alt="beer toast" />
          <h1>Cadastro</h1>
        </header>
        <form className="sign-form">
          <Input
            id="common_register__input-name"
            name="Nome"
            onChange={ handleChange }
            placeholder="Seu nome"
            type="text"
            value={ Nome }
          />
          <Input
            id="common_register__input-email"
            name="Email"
            onChange={ handleChange }
            placeholder="seu-email@site.com"
            type="email"
            value={ Email }
          />
          <Input
            id="common_register__input-password"
            name="Senha"
            onChange={ handleChange }
            placeholder="***********"
            type="password"
            value={ Senha }
          />
          <button
            data-testid="common_register__button-register"
            disabled={ !isRegisterValid() }
            onClick={ handleClick }
            type="button"
          >
            Cadastrar
          </button>
        </form>
      </div>
      { showErrorMessage && (
        <p
          className="error-message"
          data-testid="common_register__element-invalid_register"
        >
          Usuário já cadastrado.
        </p>
      )}
    </>
  );
}

export default Register;
