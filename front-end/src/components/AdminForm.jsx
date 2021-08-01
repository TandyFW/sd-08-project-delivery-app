import React, { useState, useEffect } from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import Joi from 'joi';
import ButtonContained from './ButtonContained';
import InputAdmin from './inputAdmin';

function AdminForm() {
  const [select, setSelect] = useState('seller');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [disabled, setDisabled] = useState(true);

  const minNameLength = 12;
  const minPasswordLength = 6;
  const validation = Joi.object({
    nameValidation: Joi.string().min(minNameLength),
    emailValidation: Joi.string().email({
      minDomainSegments: 2,
      tlds: { allow: false },
    }),
    passwordValidation: Joi.string().min(minPasswordLength),
    roleValidation: Joi.string(),
  });

  function handleInputs(value, label) {
    if (label === 'Nome') {
      setName(value);
    }
    if (label === 'Email') {
      setEmail(value);
    }
    setPassword(value);
  }

  console.log(select, name, email, password);

  const list = [
    {
      label: 'Nome',
      datatest: 'admin_manage__input-name',
    },
    {
      label: 'Email',
      datatest: 'admin_manage__input-email',
    },
    {
      label: 'Senha',
      datatest: 'admin_manage__input-password',
    },
  ];
  const buttonStuff = {
    type: 'button',
    datatest: 'admin_manage__button-register',
    text: 'CADASTRAR',
  };

  useEffect(() => {
    const validate = validation.validate({
      nameValidation: name,
      emailValidation: email,
      passwordValidation: password,
      roleValidation: select,
    });
    console.log(name, email, password, select);
    if (!validate.error) setDisabled(false);
    else setDisabled(true);
  }, [name, email, password, select]);

  return (
    <form>
      <p>Cadastrar novo usuário</p>
      {
        list.map((item) => (
          <InputAdmin
            label={ item.label }
            datatest-id={ item.datatest }
            key="input"
            onChange={ ({ target }) => handleInputs(target.value, item.label) }
          />))
      }
      <InputLabel id="demo-simple-select-helper-label">Tipo</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={ select }
        datatest-id="admin_manage__select-role"
        onChange={ ({ target }) => setSelect(target.value) }
      >
        <MenuItem value="customer">Vendedor</MenuItem>
        <MenuItem value="seller">Cliente</MenuItem>
      </Select>
      <ButtonContained
        type={ buttonStuff.type }
        datatest-id={ buttonStuff.datatest }
        value={ buttonStuff.value }
        disabled={ disabled }
        text={ buttonStuff.text }
      />
    </form>
  );
}

export default AdminForm;
