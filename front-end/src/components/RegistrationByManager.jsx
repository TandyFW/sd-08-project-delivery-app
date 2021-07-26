import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { isValidUserForRegistration } from '../utils';
import { request } from '../utils/request';
// import AlertTransitionSlide from './AlertTransitionSlide';
// import ContextProvider from '../context';

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

  const [role, setRole] = useState('Admin');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisable] = useState(true);
  const [user, setUser] = useState({});
  // const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setDisable(!isValidUserForRegistration(name, email, password));
  }, [name, email, password]);

  const handleChange = (callback, event) => {
    callback(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const userObj = await request('admin', 'POST', {
      name,
      email,
      password,
      role });
    setUser(userObj);
  };

  const renderErrorMessage = () => {
    if ('message' in user) {
      return (
        // <AlertTransitionSlide
        //   title="Imposível cadastrar"
        //   text="Usuário já existente"
        // />
        <h1 data-testid="admin_manage__element-invalid-register">{user.message}</h1>
      );
    }
  };

  return (
    <div>
      <form className={ classes.root }>
        <TextField
          value={ name }
          data-testid="admin_manage__input-name"
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          onChange={ (event) => handleChange(setName, event) }
        />
        <TextField
          value={ email }
          data-testid="admin_manage__input-email"
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={ (event) => handleChange(setEmail, event) }
        />
        <TextField
          value={ password }
          data-testid="admin_manage__input-password"
          id="outlined-basic"
          label="Senha"
          variant="outlined"
          onChange={ (event) => handleChange(setPassword, event) }
        />
        <Select
          data-testid="admin_manage__select-role"
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ role }
          onChange={ (event) => handleChange(setRole, event) }
        >
          <MenuItem value="Vendedor">Vendedor</MenuItem>
          <MenuItem value="Cliente">Cliente</MenuItem>
          <MenuItem value="Admin">Admin</MenuItem>
        </Select>
        <Button
          variant="contained"
          color="primary"
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          Cadastrar
        </Button>
      </form>
      {renderErrorMessage()}
      {/* <AlertTransitionSlide title="Imposível cadastrar" text="Usuário já existente" /> */}
    </div>
  );
}
