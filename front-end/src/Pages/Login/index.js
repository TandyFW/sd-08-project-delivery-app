import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core/';

import { LoginForm, LoginPage } from './styled';

const Login = ({ history }) => {
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
      <LoginForm>
        <TextField
          label="Email"
          value={ email }
          onChange={ handleChange.email }
        />
        <TextField
          type="password"
          label="Senha"
          value={ password }
          onChange={ handleChange.password }
        />
        <Button
          variant="contained"
          color="primary"
        >
          LOGIN
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={ () => history.push('/register') }
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
