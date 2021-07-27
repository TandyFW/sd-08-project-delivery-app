import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { isValidUserForRegistration, lStorage, request } from '../utils';
import TransitionAlerts from './TransitionAlerts';
import { useGroupState } from '../hooks';

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

  const { role, name, email, password, isDisabled, user, open } = useGroupState({
    role: 'seller',
    name: '',
    email: '',
    password: '',
    isDisabled: true,
    user: {},
    open: false,
  });

  useEffect(() => {
    isDisabled.set(!isValidUserForRegistration(name.value, email.value, password.value));
  }, [name.value, email.value, password.value, isDisabled]);

  useEffect(() => {
    if (user.value.message) {
      open.set(true);
    }
  }, [user.value]);

  const handleChange = (callback, event) => {
    callback(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();

    const admin = lStorage().user.get();
    const options = {
      headers: {
        Authorization: admin.token,
      },
      body: {
        name: name.value,
        email: email.value,
        password: password.value,
        role: role.value,
      },
      method: 'POST',
    };

    const userObj = await request('admin', options);
    user.set(userObj);
  };

  const renderErrorMessage = () => (
    <TransitionAlerts
      message={ user.value.message }
      open={ open }
      testId="admin_manage__element-invalid-register"
      severity="warning"
    />
  );

  return (
    <div>
      <form className={ classes.root }>
        <TextField
          value={ name.value }
          inputProps={ { 'data-testid': 'admin_manage__input-name' } }
          label="Nome"
          variant="outlined"
          onChange={ (event) => handleChange(name.set, event) }
        />
        <TextField
          value={ email.value }
          inputProps={ { 'data-testid': 'admin_manage__input-email' } }
          label="Email"
          variant="outlined"
          onChange={ (event) => handleChange(email.set, event) }
        />
        <TextField
          value={ password.value }
          inputProps={ { 'data-testid': 'admin_manage__input-password' } }
          label="Senha"
          variant="outlined"
          onChange={ (event) => handleChange(password.set, event) }
        />
        <Select
          inputProps={ { 'data-testid': 'admin_manage__select-role' } }
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={ role.value }
          onChange={ (event) => handleChange(role.set, event) }
          native
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
        </Select>
        <Button
          data-testid="admin_manage__button-register"
          variant="contained"
          color="primary"
          disabled={ isDisabled.value }
          onClick={ handleClick }
        >
          Cadastrar
        </Button>
      </form>
      {renderErrorMessage()}
    </div>
  );
}
