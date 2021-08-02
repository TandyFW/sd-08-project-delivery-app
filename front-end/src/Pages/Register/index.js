import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core/';
import { RegisterPage, RegisterForm } from './styled';

import { registerRequest } from '../../services/api';
import { emailVerify, passwordVerify, nameVerify } from '../../services/validations';

import LoginErrorMessage from '../../components/LoginErrorMessage';

import Logo from '../../components/Logo';

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [usrExists, setUsrExists] = useState(false);

  const handleChange = {
    name: ({ target }) => setName(target.value),
    email: ({ target }) => setEmail(target.value),
    password: ({ target }) => setPassword(target.value),
  };

  const register = async () => {
    await registerRequest({ name, password, email }, setUsrExists, history);
  };

  console.log(!emailVerify(email), !passwordVerify(password), !nameVerify(name));

  return (
    <RegisterPage>
      { usrExists && (
        <LoginErrorMessage
          testId="common_register__element-invalid_register"
          disableMessage={ setUsrExists }
        />
      )}
      <RegisterForm>
        <TextField
          label="Nome"
          value={ name }
          onChange={ handleChange.name }
          inputProps={ {
            'data-testid': 'common_register__input-name',
          } }
        />
        <TextField
          label="Email"
          value={ email }
          onChange={ handleChange.email }
          inputProps={ {
            'data-testid': 'common_register__input-email',
          } }
        />
        <TextField
          type="password"
          label="Senha"
          value={ password }
          onChange={ handleChange.password }
          inputProps={ {
            'data-testid': 'common_register__input-password',
          } }
        />
        <Button
          variant="contained"
          color="primary"
          data-testid="common_register__button-register"
          onClick={ register }
          disabled={
            !emailVerify(email) || !passwordVerify(password) || !nameVerify(name)
          }
        >
          CADASTRAR
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={ () => history.push('/login') }
        >
          JÁ TENHO UMA CONTA
        </Button>
      </RegisterForm>
      <Logo />
    </RegisterPage>

  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Register;
