import React, { useState, useEffect } from 'react';
import { InputLabel } from '@material-ui/core';
import Joi from 'joi';
import axios from 'axios';
import ButtonContained from './ButtonContained';
import InputAdmin from './inputAdmin';

function AdminForm() {
  const [role, setRole] = useState('seller');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState(' ');
  const [disabled, setDisabled] = useState(true);
  const [visible, setVisible] = useState('hidden');

  const minNameLength = 12;
  const minPasswordLength = 6;
  const validation = Joi.object({
    nameValidation: Joi.string().min(minNameLength),
    emailValidation: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: false },
    }).required(),
    passwordValidation: Joi.string().min(minPasswordLength),
    roleValidation: Joi.string(),
  });

  // const validateName = (userName) => {
  //   if (userName && typeof userName === 'string' && userName.length >= minNameLength) {
  //     return true;
  //   }
  //   return false;
  // };

  // const validateEmail = (userEmail) => {
  //   const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  //   if (regex.test(userEmail) === true) {
  //     return true;
  //   }
  //   return false;
  // };

  // const validatePassword = (userPassword) => {
  //   if (userPassword && typeof userPassword === 'string' && userPassword.length >= min) {
  //     return true;
  //   }
  //   return false;
  // };

  // const validateInputs = (username, newEmail, newPassword, newRole) => {
  //   const testName = validateName(username);
  //   const testEmail = validateEmail(newEmail);
  //   const testPassword = validatePassword(newPassword);
  //   if (testName === true && testEmail === true && testPassword === true && newRole) {
  //     setDisabled(false);
  //   } else {
  //     setDisabled(true);
  //   }
  // };

  const adminRegister = async () => {
    try {
      const jwt = JSON.parse(localStorage.getItem('user'));
      console.log(jwt);
      await axios({
        method: 'POST',
        url: 'http://localhost:3001/admin/register',
        headers: { 'Content-Type': 'application/json', authorization: jwt.token },
        data: { name, email, password, role },
      });
    } catch (error) {
      setVisible('visible');
    }
  };

  function handleInputs(value, label) {
    if (label === 'Nome') {
      setName(value);
    }
    if (label === 'Email') {
      setEmail(value);
    }
    if (label === 'Senha') {
      setPassword(value);
    }
  }

  const infosList = [
    {
      label: 'Nome',
      data: 'admin_manage__input-name',
    },
    {
      label: 'Email',
      data: 'admin_manage__input-email',
    },
    {
      label: 'Senha',
      data: 'admin_manage__input-password',
    },
  ];

  const buttonStuff = {
    type: 'button',
    data: 'admin_manage__button-register',
    text: 'CADASTRAR',
  };

  useEffect(() => {
    const validate = validation.validate({
      nameValidation: name,
      emailValidation: email,
      passwordValidation: password,
      roleValidation: role,
    });
    if (!validate.error) setDisabled(false);
    else {
      console.log(validate.error);
      setDisabled(true);
    }
    // validateInputs(name, email, password, role);
  }, [name, email, password, role]);

  return (
    <form>
      <p>Cadastrar novo usuário</p>
      {/* <InputAdmin
        label="Nome"
        data="admin_manage__input-name"
        onChange={ ({ target }) => setName(target.value) }
      />
      <InputAdmin
        label="Email"
        data="admin_manage__input-email"
        onChange={ ({ target }) => setEmail(target.value) }
      />
      <InputAdmin
        label="Senha"
        data="admin_manage__input-password"
        onChange={ ({ target }) => setPassword(target.value) }
      /> */}
      {
        infosList.map((item) => (
          <InputAdmin
            label={ item.label }
            data={ item.data }
            key={ item.label }
            onChange={ ({ target }) => handleInputs(target.value, item.label) }
          />))
      }
      <InputLabel id="demo-simple-select-helper-label">Tipo</InputLabel>
      <select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ role }
        data-testid="admin_manage__select-role"
        onChange={ ({ target }) => setRole(target.value) }
      >
        <option value="customer">Vendedor</option>
        <option value="seller">Cliente</option>
      </select>
      <ButtonContained
        type={ buttonStuff.type }
        data={ buttonStuff.data }
        value={ buttonStuff.value }
        disabled={ disabled }
        text={ buttonStuff.text }
        onClick={ adminRegister }
      />
      <span
        data-testid="admin_manage__element-invalid-register"
        style={ { visibility: visible } }
      >
        Usuário já cadastrado com esses dados. Tente novamente.
      </span>

    </form>
  );
}

export default AdminForm;
