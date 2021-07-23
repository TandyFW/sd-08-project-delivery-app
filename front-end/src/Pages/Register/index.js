import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { TextField, Button } from '@material-ui/core/';

import { RegisterPage, RegisterForm } from './styled';

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
          onChange={ handleChange.email }
        />
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
