import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createUser } from '../services/Api';
import { saveState } from '../services/LocalStorage';
import Input from '../components/Input';

import beerToastIcon from '../images/beer.png';

import '../styles/Register.css';

const MIN_NAME_LENGTH = 12;
const MIN_PASSWORD_LENGTH = 6;

function Register() {
  const [user, setUser] = useState(undefined);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [inputValue, setInputValue] = useState({ Nome: '', Email: '', Senha: '' });
  const { Nome, Email, Senha } = inputValue;
  const history = useHistory();

  const handleClick = async () => {
    const newUser = await createUser({ name: Nome, email: Email, password: Senha });

    if (newUser) {
      setUser(newUser);
      saveState('user', newUser);
    }

    return !newUser && setShowErrorMessage(true);
  };

  useEffect(() => user && history.push('/customer/products'), [user, history]);

  const handleChange = ({ target }) => {
    setInputValue({ ...inputValue, [target.name]: target.value });
  };

  const isRegisterValid = () => {
    const isNameValid = inputValue.Nome.length >= MIN_NAME_LENGTH;
    const isEmailValid = /\S+@\S+\.\S+/.test(inputValue.Email);
    const isPasswordValid = inputValue.Senha.length >= MIN_PASSWORD_LENGTH;

    return [isNameValid, isEmailValid, isPasswordValid]
      .every((validation) => validation === true);
  };

  return (
    <>
      <div className="register-container">
        <header>
          <img src={ beerToastIcon } alt="beer toast" />
          <h1>Cadastro</h1>
        </header>
        <form className="register-form">
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
