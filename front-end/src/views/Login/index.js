import React, { useState } from 'react';
import './styles.css';

function Login() {
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');

  function checkInputs() {
    const PASSWORD_MIN_LENGTH = 6;
    const re = /.+@[A-z]+[.]com/;
    if (password.length >= PASSWORD_MIN_LENGTH && re.test(email)) {
      return false;
    }
    return true;
  }
  const handleSubmit = async () => {
    const myInit = {
      method: 'POST',
      body: JSON.stringify({ email, password }),
    };
    const rawResponse = await fetch('localhost:3000/login', myInit);
    const data = await rawResponse.json();
    return data;
  };
  return (
    <div className="main-wrapper">
      <h2>ONzé Delivery</h2>
      <div className="content">
        <input
          type="text"
          value={ email }
          placeholder="digite seu e-mail..."
          data-testid="common_login__input-email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <input
          value={ password }
          type="password"
          placeholder="digite sua senha..."
          data-testid="common_login__input-password"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <button
          data-testid="common_login__button-login"
          type="submit"
          disabled={ checkInputs() }
          onClick={ handleSubmit }
        >
          LOGIN
        </button>
        <button
          datatest-id="common_login__button-register"
          type="button"
        >
          Ainda não tenho conta
        </button>
      </div>
    </div>
  );
}

export default Login;
