import React from 'react';
import './RegisterNewUserForm.css';

export default function RegisterNewUserForm() {
  return (
    <div className="container">
      <form className="register-new-user-form">
        <label htmlFor="nome">
          Nome
          <input
            type="text"
            name="nome"
            data-testid="admin_manage__input-name"
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            name="email"
            data-testid="admin_manage__input-email"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            name="password"
            data-testid="admin_manage__input-password"
          />
        </label>
        <label htmlFor="type">
          Tipo
          <select
            name="type"
            className="register-new-user-select"
            data-testid="admin_manage__select-role"
          >
            <option value="">Vendedor</option>
          </select>
        </label>
        <button
          type="submit"
          className="register-new-user-button"
          data-testid="admin_manage__button-register"
          disabled
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
