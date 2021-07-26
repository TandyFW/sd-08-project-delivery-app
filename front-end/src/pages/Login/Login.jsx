import { useState, useEffect, React } from 'react';
import { Link } from 'react-router-dom';
import './Login.css';
import delivery from '../../images/delivery.jpeg';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);

  const handleEmail = ({ target }) => {
    setEmail(target.value);
  };

  const handlePassword = ({ target }) => {
    setPassword(target.value);
  };

  useEffect(() => {
    const PASSWORD_LENGTH = 6;
    const isEmailValid = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    if (isEmailValid.test(email) && password.length >= PASSWORD_LENGTH) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  }, [email, password.length]);

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
            onChange={ handleEmail }
            value={ email }
          />
        </label>
        <label htmlFor="password">
          Senha
          <input
            type="password"
            data-testid="common_login__input-password"
            placeholder="**********"
            onChange={ handlePassword }
            value={ password }
          />
        </label>
        <button
          type="submit"
          // className="login-button"
          data-testid="common_login__button-login"
          disabled={ isDisabled }
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
