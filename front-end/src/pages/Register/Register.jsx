import React from 'react';
import './Register.css';

export default function Register() {
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
          />
        </label>
        <label htmlFor="email">
          Email
          <input
            type="email"
            data-testid="common_register__input-email"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="common_register__input-password"
            placeholder="**********"
          />
        </label>
        <button
          type="submit"
          className="register-button"
          data-testid="common_register__button-register"
        >
          Cadastrar
        </button>
      </form>
    </div>
  );
}
