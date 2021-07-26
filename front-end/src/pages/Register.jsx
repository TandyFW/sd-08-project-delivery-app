import React, { useState } from 'react';
import { FormControl, InputLabel, Button } from '@material-ui/core';

function Register() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <>
      <h3>Cadastro</h3>
      <FormControl>
        <InputLabel htmlFor="name-input">Nome</InputLabel>
        <input
          id="name-input"
          type="text"
          placeholder="Digite seu nome"
          data-testid="common_register__input-name"
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
        <InputLabel htmlFor="email-input">Email</InputLabel>
        <input
          id="email-input"
          type="email"
          placeholder="Digite seu email"
          data-testid="common_register__input-email"
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
        <InputLabel htmlFor="password-input">Senha</InputLabel>
        <input
          id="password-input"
          type="password"
          placeholder="Escolha uma senha"
          data-testid="common_register__input-password"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <Button
          data-testid="common_register__button-register"
          type="submit"
        >
          CADASTRAR
        </Button>
      </FormControl>
    </>
  );
}

export default Register;
