import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import './RegisterNewUserForm.css';
import { getUserInfo } from '../../service/getLocalStorage';

export default function RegisterNewUserForm() {
  const history = useHistory();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
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

  const handleRole = ({ target }) => {
    setRole(target.value);
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
        headers: {
          authorization: getUserInfo().token,
        },
      });
      console.log(result);
      setName('');
      setEmail('');
      setPassword('');
      history.push('/admin/manage');
    } catch (e) {
      console.log(e);
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
            onChange={ handleRole }
            value={ role }
          >
            <option value="seller">Vendedor</option>
            <option value="admin">Administrador</option>
            <option value="customer">Cliente</option>
          </select>
        </label>
        <button
          type="button"
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
          Usuário já cadastrado
        </p>
      ) : (
        ''
      )}
    </div>
  );
}
