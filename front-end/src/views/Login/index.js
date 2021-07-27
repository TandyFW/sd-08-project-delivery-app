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
      <div className="content">
        <h1>ONzé Delivery</h1>
        <div className="form-control">
          <input
            id="email"
            name="email"
            type="email"
            value={ email }
            data-testid="common_login__input-email"
            onChange={ (e) => setEmail(e.target.value) }
          />
        </div>
        <p>Email</p>
        <div className="form-control">
          <input
            id="password"
            name="password"
            value={ password }
            type="password"
            data-testid="common_login__input-password"
            onChange={ (e) => setPassword(e.target.value) }
          />
        </div>
        <p>Password</p>
        <button
          className="btn"
          data-testid="common_login__button-login"
          type="submit"
          disabled={ checkInputs() }
          onClick={ handleSubmit }
        >
          LOGIN
        </button>
        <button
          className="btn"
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
