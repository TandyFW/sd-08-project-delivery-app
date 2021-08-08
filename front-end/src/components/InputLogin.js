import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import beerSignIcon from '../images/beer-sign.png';

export default function InputLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);
  const [redirected, setRedirected] = useState(false);

  const history = useHistory();

  function handleClick() {
    history.push('/register');
  }

  async function handleLogin(e) {
    e.preventDefault();
    const user = await axios.post('http://localhost:3001/login', {
      email, password,
    })
      .then((data) => data)
      .catch((err) => console.log(err));

    if (user === undefined) {
      return setRedirected(true);
    }
    if (user.data.role === 'seller') {
      localStorage.setItem('user', JSON.stringify(user.data));
      setRedirected(false);
      history.push('/seller/orders');
      return;
    }
    if (user.data.role === 'administrator') {
      localStorage.setItem('user', JSON.stringify(user.data));
      setRedirected(false);
      history.push('/admin/manage');
      return;
    }
    if (user.statusText === 'OK') {
      localStorage.setItem('user', JSON.stringify(user.data));
      setRedirected(false);
      history.push('/customer/products');
    }
  }

  const handleEmail = ({ target: { value } }) => {
    setEmail(value);
  };

  const handlePassword = ({ target: { value } }) => {
    setPassword(value);
  };

  useEffect(() => {
    const NUMBER_SIX = 6;
    const emailRegex = /\S+@\S+\.\S+/;

    if (emailRegex.test(email) && password.length >= NUMBER_SIX) {
      setDisabled(false);
    } else { setDisabled(true); }
  }, [email, password]);

  return (
    <>
      <div className="sign-container">
        <header>
          <h1>Gam</h1>
          <img src={ beerSignIcon } alt="beer toast" />
          <h1>arra</h1>
        </header>
        <form className="sign-form">
          <label htmlFor="Input-login">
            <p>Login</p>
            <input
              data-testid="common_login__input-email"
              type="text"
              id="Input-login"
              placeholder="example@gmail.com"
              name="email"
              onChange={ handleEmail }
            />
          </label>
          <label htmlFor="Input-password">
            <p>Senha</p>
            <input
              data-testid="common_login__input-password"
              type="password"
              id="Input-password"
              placeholder="*******"
              name="password"
              onChange={ handlePassword }
            />
          </label>
          <button
            type="button"
            data-testid="common_login__button-login"
            id="btn-login"
            disabled={ disabled }
            onClick={ handleLogin }
          >
            LOGIN
          </button>
          <button
            type="button"
            data-testid="common_login__button-register"
            id="btn-cadastro"
            onClick={ handleClick }
          >
            Ainda não tenho cadastro
          </button>
        </form>
      </div>
      {redirected && (
        <p
          className="error-message"
          data-testid="common_login__element-invalid-email"
        >
          Senha ou usuário incorreto
        </p>
      )}
    </>
  );
}
