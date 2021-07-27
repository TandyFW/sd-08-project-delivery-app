import axios from 'axios';
import { React, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Register.css';
import setUserInfo from '../../service/setLocalStorage';

export default function Register() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [statusNewUser, setStatusNewUser] = useState('');
  const [showMessageRegister, setShowMessageRegister] = useState(false);
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

  const saveNewUser = async () => {
    try {
      const result = await axios({
        method: 'post',
        url: 'http://localhost:3001/register/user',
        data: {
          email,
          password,
          name,
        },
      });
      console.log(result);
      const { data } = result;
      setUserInfo({ name, email, role: 'costumer', token: data });
      history.push('customer/products');
    } catch (e) {
      const {
        response: { status },
      } = e;
      setStatusNewUser(status);
    }
  };

  useEffect(() => {
    if (statusNewUser === Number('409')) {
      setShowMessageRegister(true);
    } else {
      setShowMessageRegister(false);
    }
  }, [statusNewUser]);

  useEffect(() => {
    const PASSWORD_LENGTH = 6;
    const NAME_LENGTH = 12;
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (
      isEmailValid.test(email)
      && password.length >= PASSWORD_LENGTH
      && name.length >= NAME_LENGTH
    ) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [name.length, email, password.length]);

  console.log(isDisabled);

  return (
    <div className="register">
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
          type="button"
          className="register-button"
          data-testid="common_register__button-register"
          disabled={ isDisabled }
          onClick={ saveNewUser }
        >
          Cadastrar
        </button>
      </form>
      {showMessageRegister ? (
        <p data-testid="common_register__element-invalid_register">
          Usuário não encontrado ou senha inválida
        </p>
      ) : (
        ''
      )}
    </div>
  );
}
