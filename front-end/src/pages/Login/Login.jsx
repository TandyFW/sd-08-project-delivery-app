import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import delivery from '../../images/delivery.jpeg';

export default function Login() {
  return (
    <div>
      <img src={ delivery } alt="Entrega de produto" />
      <h1 className="title">Delivery da Terezona</h1>
      <form className="login-form">
        <label htmlFor="login">
          Login
          <input
            type="email"
            data-testid="common_login__input-email"
            placeholder="seu-email@site.com.br"
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="common_login__input-password"
            placeholder="**********"
          />
        </label>
        <button
          type="submit"
          className="login-button"
          data-testid="common_login__button-login"
        >
          LOGIN
        </button>
        <Link to="/register">
          <button
            type="submit"
            className="register-button"
            data-testid="common_login__button-register"
          >
            Ainda não tenho conta
          </button>
        </Link>
      </form>
    </div>
  );
}
