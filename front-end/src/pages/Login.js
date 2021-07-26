import React, { useEffect, useContext } from 'react';
import { Link, useHistory } from 'react-router-dom';
import contextDelivery from '../context/Context';
import loginApi from '../services/loginApi';

function Login() {
  const {
    email,
    setEmail,
    password,
    setPassword,
    disable,
    setDisable,
  } = useContext(contextDelivery);

  useEffect(() => {
    function buttonAble() {
      const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const minOfCaracteres = 6;
      if (validEmail.test(email) && password.length >= minOfCaracteres) {
        setDisable(false);
      } else setDisable(true);
    }
    buttonAble();
  }, [email, password, setDisable]);

  const history = useHistory();

  async function handleClick() {
    loginApi(email, password);
    if (localStorage.getItem('token')) history.push('/products');
  }

  return (
    <fieldset>
      <input
        type="text"
        data-testid="common_login__input-email"
        placeholder="Email"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        data-testid="common_login__input-password"
        placeholder="Senha"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ disable }
        onClick={ handleClick }
      >
        LOGIN
      </button>
      <Link to="/register">
        <button
          type="button"
          data-testid="common_login__button-register"
        >
          Ainda não tenho conta
        </button>
      </Link>
    </fieldset>
  );
}

export default Login;
