import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'row',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function RegistrationByManager() {
  const classes = useStyles();
  const [user, setUser] = useState('Admin');

  const handleChange = (event) => {
    setUser(event.target.value);
  };

  return (
    <div>
      <form className={ classes.root }>
        <TextField
          data-testid="admin_manage__input-name"
          id="outlined-basic"
          label="Nome"
          variant="outlined"
        />
        <TextField
          data-testid="admin_manage__input-email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
        />
        <TextField
          data-testid="admin_manage__input-password"
          id="outlined-basic"
          label="Senha"
          variant="outlined"
        />
        <Select
          data-testid="admin_manage__select-role"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ user }
          onChange={ handleChange }
        >
          <MenuItem value="Vendedor">Vendedor</MenuItem>
          <MenuItem value="Cliente">Cliente</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
        </Select>
        <Button variant="contained" color="primary">
          Cadastrar
        </Button>
      </form>
    </div>
  );
}
