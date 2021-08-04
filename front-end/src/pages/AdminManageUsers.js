import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { createUserByAdmin, fetchUsers } from '../services/Api';
import { loadState } from '../services/LocalStorage';
import Input from '../components/Input';
import UsersTable from '../components/UsersTable';

import '../styles/AdminManageUsers.css';

function AdminManageUsers() {
  const [users, setUsers] = useState(undefined);
  const [showErrorMessage, setShowErrorMessage] = useState(false);
  const [inputValue, setInputValue] = useState(
    { Nome: '', Email: '', Senha: '', Tipo: '' },
  );
  const { Nome, Email, Senha, Tipo } = inputValue;
  const userData = loadState('user');
  const MIN_NAME_LENGTH = 12;
  const MIN_PASSWORD_LENGTH = 6;
  const history = useHistory();

  const logout = () => {
    localStorage.clear();
    history.push('/login');
  };

  const handleChange = ({ target }) => {
    setInputValue({ ...inputValue, [target.name]: target.value });
  };

  const handleClick = async () => {
    setShowErrorMessage(false);
    const newUser = await createUserByAdmin(
      { name: Nome, email: Email, password: Senha, role: Tipo }, userData.token,
    );
    return !newUser && setShowErrorMessage(true);
  };

  const getUsers = async () => {
    setUsers(await fetchUsers());
  };

  useEffect(() => getUsers(), []);

  console.log(users);

  const renderRoleSelectInput = () => (
    <label htmlFor="user-role">
      <p>Tipo</p>
      <select
        data-testid="admin_manage__select-role"
        id="user-role"
        name="Tipo"
        onChange={ handleChange }
        value={ Tipo }
      >
        <option value="" disabled hidden>Selecione</option>
        { ['seller', 'customer', 'administrator']
          .map((role) => <option key={ role } value={ role }>{role}</option>) }
      </select>
    </label>
  );

  const isRegisterValid = () => {
    const isNameValid = Nome.length >= MIN_NAME_LENGTH;
    const isEmailValid = /\S+@\S+\.\S+/.test(Email);
    const isPasswordValid = Senha.length >= MIN_PASSWORD_LENGTH;
    const isRoleValid = Tipo !== '';

    return [isNameValid, isEmailValid, isPasswordValid, isRoleValid]
      .every((validation) => validation === true);
  };

  return (
    <>
      <header className="admin-header">
        <p>GERENCIAR USUÁRIOS</p>
        <p>Trybe Admin</p>
        <button
          onClick={ logout }
          type="button"
        >
          Sair
        </button>
      </header>
      <main>
        <h4>Cadastrar novo usuário</h4>
        <form className="admin-register-form">
          <Input
            id="admin_manage__input-name"
            name="Nome"
            onChange={ handleChange }
            placeholder="Seu nome"
            type="text"
            value={ Nome }
          />
          <Input
            id="admin_manage__input-email"
            name="Email"
            onChange={ handleChange }
            placeholder="seu-email@site.com"
            type="email"
            value={ Email }
          />
          <Input
            id="admin_manage__input-password"
            name="Senha"
            onChange={ handleChange }
            placeholder="***********"
            type="password"
            value={ Senha }
          />
          { renderRoleSelectInput() }
          <button
            data-testid="admin_manage__button-register"
            disabled={ !isRegisterValid() }
            onClick={ handleClick }
            type="button"
          >
            Cadastrar
          </button>
        </form>
        { showErrorMessage && (
          <p data-testid="admin_manage__element-invalid-register">
            Usuário já cadastrado.
          </p>
        )}
        {users && <UsersTable usersData={ users } />}
      </main>

    </>
  );
}

export default AdminManageUsers;
