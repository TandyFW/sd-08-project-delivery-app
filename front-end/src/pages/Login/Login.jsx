import React from 'react';
import './Login.css';
import delivery from '../../images/delivery.jpeg';

export default function Login() {
  return (
    <div>
      <img src={ delivery } alt="Entrega de produto" />
      <h1 className="title">Delivery da Terezona</h1>
      <form>
        <label htmlFor="login">
          Login
          <input type="email" data-testid="common_login__input-email" />
        </label>
        <label htmlFor="password">
          Senha
          <input type="password" data-testid="common_login__input-password" />
        </label>
        <button
          type="submit"
          className="login-button"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <button
          type="submit"
          className="password-button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </form>
    </div>
  );
}
