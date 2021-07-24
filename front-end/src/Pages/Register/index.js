import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core/';
import { RegisterPage, RegisterForm } from './styled';

import { register } from '../../services/api';

const Register = ({ history }) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleChange = {
    name: ({ target }) => setName(target.value),
    email: ({ target }) => setEmail(target.value),
    password: ({ target }) => setPassword(target.value),
  };

  return (
    <RegisterPage>
      <div>
        <p>LOGO, alguma mensagem, outra coisa</p>
      </div>
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
          onClick={ () => register({ name, password, email }) }
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
    </RegisterPage>

  );
};

Register.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
};

export default Register;
