import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core/';
import { LoginForm, LoginPage } from './styled';

import { login } from '../../services/api';
import { emailVerify, passwordVerify } from '../../services/validations';

import LoginErrorMessage from '../../components/LoginErrorMessage';

const Login = ({ history }) => {
  const [usrNotFound, setUsrNotFound] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = {
    email: ({ target }) => setEmail(target.value),
    password: ({ target }) => setPassword(target.value),
  };

  return (
    <LoginPage>
      <div>
        <p>LOGO, alguma mensagem, outra coisa</p>
      </div>
      { usrNotFound && <LoginErrorMessage disableMessage={ setUsrNotFound } />}
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
          onClick={ () => login({ email, password }, setUsrNotFound) }
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
