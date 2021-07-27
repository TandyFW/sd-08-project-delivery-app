import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Error from '../../components/error';
import Context from '../../context/Context';

function Login() {
  const { setUserData, userData } = useContext(Context);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  function checkInputs() {
    const PASSWORD_MIN_LENGTH = 6;
    const re = /.+@[A-z]+[.]com/;
    if (password.length >= PASSWORD_MIN_LENGTH && re.test(email)) {
      return false;
    }
    return true;
  }

  useEffect(() => {
    if (userData.token) {
      history.push('/customer/products');
    }
  }, [history, userData]);

  const handleSubmit = async () => {
    const myInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    };
    const rawResponse = await fetch('http://localhost:3001/login', myInit);
    const content = await rawResponse.json();
    return setUserData(content);
  };
  return (
    <div className="main-wrapper">
      <h2>ONzé Delivery</h2>
      <div className="content">
        <input
          type="email"
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
          data-testid="common_login__button-register"
          type="button"
          onClick={ () => history.push('/register') }
        >
          Ainda não tenho conta
        </button>
        {userData.message
        && <Error
          testid="common_login__element-invalid-email"
          message={ userData.message }
        />}
      </div>
    </div>
  );
}

export default Login;
