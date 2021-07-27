import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import '../cssPages/cssLogin/login.css';

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

    console.log(user);
    if (user === undefined) {
      setRedirected(true);
    }
    if (user.statusText === 'OK') {
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
  }, [email, password, setDisabled]);

  return (
    <div id="page-login">
      <div
        id="Image-logo"
      />
      <h1>Lovers App</h1>

      <div id="card-login">
        <form>
          <legend id="legend-login">Login</legend>
          <input
            data-testid="common_login__input-email"
            type="text"
            id="Input-login"
            placeholder="example@gmail.com"
            name="email"
            onChange={ handleEmail }
          />

          <legend>Senha</legend>
          <input
            data-testid="common_login__input-password"
            type="text"
            id="Input-password"
            placeholder="*******"
            name="password"
            onChange={ handlePassword }
          />
        </form>
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
      </div>
      {redirected && (
        <b
          data-testid="common_login__element-invalid-email"
        >
          Senha ou usuário incorreto
        </b>
      )}
    </div>
  );
}
