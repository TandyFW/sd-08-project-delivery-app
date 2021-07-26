import { useState, useEffect, React } from 'react';
import { Link, useHistory } from 'react-router-dom';
import axios from 'axios';
import './Login.css';
import delivery from '../../images/delivery.jpeg';

export default function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState(true);
  const [statusRequestLogin, setStatusRequestLogin] = useState('');
  const [showMessageLogin, setShowMessageLogin] = useState(false);
  const [tokenLogin, setTokenLogin] = useState('');

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

  useEffect(() => {
    if (
      statusRequestLogin === Number('404')
      || statusRequestLogin === Number('401')
    ) {
      setShowMessageLogin(true);
    } else {
      setShowMessageLogin(false);
    }
  }, [statusRequestLogin]);

  const postLogin = async () => {
    try {
      const response = await axios({
        method: 'post',
        url: 'http://localhost:3001/login',
        data: {
          email,
          password,
        },
      });
      setTokenLogin(response.data.token);
      console.log('path', response.data.path);
      history.push(response.data.path);
    } catch (e) {
      const {
        response: { status },
      } = e;
      setStatusRequestLogin(status);
    }
  };

  console.log(tokenLogin);

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
          className="login-button"
          data-testid="common_login__button-login"
          disabled={ isDisabled }
          onClick={ postLogin }
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
      {showMessageLogin ? (
        <p data-testid="common_login__element-invalid-email">
          Usuário não encontrado ou senha inválida
        </p>
      ) : (
        ''
      )}
    </div>
  );
}
