import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import contextDelivery from '../context/Context';

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
    console.log(email, password);
    function buttonAble() {
      const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
      const minOfCaracteres = 6;
      if (validEmail.test(email) && password.length >= minOfCaracteres) {
        setDisable(false);
      } else setDisable(true);
    }
    buttonAble();
  }, [email, password, setDisable]);

  return (
    <fieldset>
      <input
        type="text"
        datatestid="common_login__input-email"
        placeholder="Email"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        datatestid="common_login__input-password"
        placeholder="Senha"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="button"
        data-testid="common_login__button-login"
        disabled={ disable }
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
