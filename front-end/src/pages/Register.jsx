import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Card, InputLabel, Button } from '@material-ui/core';
import Joi from 'joi';
import axios from 'axios';

function Register() {
  const minNameLength = 12;
  const minPasswordLength = 6;

  const checkValidation = Joi.object({
    nameValidation: Joi.string().min(minNameLength),
    emailValidation: Joi.string().email({ minDomainSegments: 2, tlds: { allow: false } }),
    passwordValidation: Joi.string().min(minPasswordLength),
  });

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validateBtn, setValidateBtn] = useState(true);
  const [visible, setVisible] = useState('hidden');
  const history = useHistory();

  useEffect(() => {
    const validation = checkValidation.validate({
      nameValidation: name, emailValidation: email, passwordValidation: password,
    });
    if (!validation.error) setValidateBtn(false);
    else {
      setValidateBtn(true);
    }
  }, [name, email, password, checkValidation]);

  const register = async () => {
    try {
      await axios({
        method: 'POST',
        url: 'http://localhost:3001/register',
        headers: { 'Content-Type': 'application/json' },
        data: { name, email, password },
      });
      history.push('/customer/products');
    } catch (error) {
      console.log(error, 'teste');
      setVisible('visible');
    }
  };

  return (
    <>
      <h3>Cadastro</h3>
      <Card>
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
          disabled={ validateBtn }
          onClick={ register }
        >
          CADASTRAR
        </Button>
        <span
          data-testid="common_register__element-invalid_register"
          style={ { visibility: visible } }
        >
          Usuário já possui cadastro!
        </span>
      </Card>
    </>
  );
}

export default Register;
