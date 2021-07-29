import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './RegisterNewUserForm.css';

export default function RegisterNewUserForm() {
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
        url: 'http://localhost:3001/register/admin',
        data: {
          email,
          password,
          name,
          role,
        },
      });
      console.log(result);
      const { data } = result;
      setUserInfo({ name, email, role, token: data });
      history.push('/register/admin');
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

  return (
    <div className="container">
      <form className="register-new-user-form">
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            name="nome"
            data-testid="admin_manage__input-name"
            onChange={ handleName }
            value={ name }
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            data-testid="admin_manage__input-email"
            onChange={ handleEmail }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="admin_manage__input-password"
            onChange={ handlePassword }
            value={ password }
          />
        </label>
        <label htmlFor="type">
          Tipo
          <select
            name="type"
            className="register-new-user-select"
            data-testid="admin_manage__select-role"
          >
            <option value="seller">Vendedor</option>
            <option value="admin">Administrador</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <button
          type="submit"
          className="register-new-user-button"
          data-testid="admin_manage__button-register"
          onClick={ saveNewUser }
          disabled={ isDisabled }
        >
          Cadastrar
        </button>
      </form>
      {showMessageRegister ? (
        <p data-testid="admin_manage__element-invalid-register">
          Usuário não encontrado ou senha inválida
        </p>
      ) : (
        ''
      )}
    </div>
  );
}
