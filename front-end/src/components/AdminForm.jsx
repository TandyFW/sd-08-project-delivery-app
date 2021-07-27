import React, { useState } from 'react';
import { InputLabel, MenuItem, Select } from '@material-ui/core';
import ButtonContained from './ButtonContained';
import InputAdmin from './inputAdmin';

function AdminForm() {
  const [select, setSelect] = useState('seller');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

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
        <MenuItem value="seller">Vendedor</MenuItem>
        <MenuItem value="customer">Cliente</MenuItem>
      </Select>
      <ButtonContained
        type={ buttonStuff.type }
        datatest-id={ buttonStuff.datatest }
        value={ buttonStuff.value }
        text={ buttonStuff.text }
      />
    </form>
  );
}

export default AdminForm;
