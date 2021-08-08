import React, { useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core/';
import { LoginForm, LoginPage } from './styled';

import { loginRequest } from '../../services/api';
import { emailVerify, passwordVerify } from '../../services/validations';

import LoginErrorMessage from '../../components/LoginErrorMessage';

import Logo from '../../components/Logo';

const Login = ({ history }) => {
  const [usrNotFound, setUsrNotFound] = useState(false);
  const [usrToken, setUsrToken] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = {
    email: ({ target }) => setEmail(target.value),
    password: ({ target }) => setPassword(target.value),
  };

  const getLoginRole = () => {
    const { role } = JSON.parse(localStorage.getItem('user'));
    if (role === 'seller') return '/seller/orders';
    if (role === 'customer') return '/customer/products';
    if (role === 'administrator') return '/admin/manage';
  };

  const login = async () => {
    const data = await loginRequest({ email, password }, setUsrNotFound, history);
    localStorage.setItem('user', JSON.stringify(data));
  };

  useEffect(() => {
    const { token } = JSON.parse(localStorage.getItem('user')) || '';
    setUsrToken(token);
  }, []);

  if (usrToken) return <Redirect to={ getLoginRole() } />;

  return (
    <LoginPage>
      { usrNotFound && (
        <LoginErrorMessage
          disableMessage={ setUsrNotFound }
          testId="common_login__element-invalid-email"
        />
      )}
      <Logo />
      <LoginForm>
        <TextField
          label="Email"
          value={ email }
          onChange={ handleChange.email }
          inputProps={ {
            'data-testid': 'common_login__input-email',
          } }
        />
        <TextField
          type="password"
          label="Senha"
          value={ password }
          onChange={ handleChange.password }
          inputProps={ {
            'data-testid': 'common_login__input-password',
          } }
        />
        <Button
          variant="contained"
          color="primary"
          data-testid="common_login__button-login"
          onClick={ login }
          disabled={ !passwordVerify(password) || !emailVerify(email) }
        >
          LOGIN
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={ () => history.push('/register') }
          data-testid="common_login__button-register"
        >
          AINDA NÃO TENHO CONTA
        </Button>
      </LoginForm>
    </LoginPage>

  );
};

Login.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Login;
