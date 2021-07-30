import React, { useContext, useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import './styles.css';
import Error from '../../components/error';
import Context from '../../context/Context';

function Login() {
  const { setUserData, userData } = useContext(Context);
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const history = useHistory();
  const refEmail = useRef();
  const refPass = useRef();
  const FIFTY = 50;
  function checkInputs() {
    const PASSWORD_MIN_LENGTH = 6;
    const re = /.+@[A-z]+[.]com/;
    if (password.length >= PASSWORD_MIN_LENGTH && re.test(email)) {
      return false;
    }
    return true;
  }

  useEffect(() => {
    console.log(userData);
    if (userData.token) {
      const { user: { role } } = userData;

      switch (role) {
      case 'customer':
        history.push('/customer/products');
        break;
      case 'seller':
        history.push('/seller/orders');
        break;
      default:
        break;
      }
    }
    refEmail.current.innerHTML = refEmail.current.innerText
      .split('')
      .map((letter, index) => `<span style="transition-delay:${index * FIFTY}ms">
    ${letter}</span>`)
      .join('');
    refPass.current.innerHTML = refPass.current.innerText
      .split('')
      .map((letter, index) => `<span style="transition-delay:${index * FIFTY}ms">
      ${letter}</span>`)
      .join('');
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
      <div className="container">
        <h1>ONzé Delivery</h1>
        <div className="form-control">
          <input
            required
            id="email"
            name="email"
            type="email"
            value={ email }
            data-testid="common_login__input-email"
            onChange={ (e) => setEmail(e.target.value) }
          />
          <p ref={ refEmail }>Email</p>
        </div>
        <div className="form-control">
          <input
            required
            id="password"
            name="password"
            value={ password }
            type="password"
            data-testid="common_login__input-password"
            onChange={ (e) => setPassword(e.target.value) }
          />
          <p ref={ refPass }>Password</p>
        </div>
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
