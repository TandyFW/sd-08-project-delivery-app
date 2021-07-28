import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { isValidUserForRegistration, request, getPathByRole, lStorage } from '../utils';
import TransitionAlerts from './TransitionAlerts';

const useStyles = makeStyles((theme) => ({
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
  root: {
    display: 'flex',
    justifyContent: 'space-around',
    flexWrap: 'wrap',
    flexDirection: 'column',
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Register() {
  const classes = useStyles();
  const history = useHistory();

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setDisable] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [open, setOpen] = React.useState(false);

  useEffect(() => {
    setDisable(!isValidUserForRegistration(name, email, password));
  }, [name, email, password]);

  useEffect(() => {
    if (errorMessage) setOpen(true);
  }, [errorMessage]);

  const handleChange = (callback, event) => {
    callback(event.target.value);
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const options = {
      body: {
        name,
        email,
        password,
        role: 'customer',
      },
      method: 'POST',
    };
    const { token, message } = await request('register', options);

    if (!message) {
      const user = {
        name,
        email,
        role: 'customer',
        token,
      };
      lStorage().user.set(user);
      const homePage = getPathByRole(user.role);
      history.push(homePage);
    } else {
      setErrorMessage(message);
      setOpen(true);
    }
  };

  const renderErrorMessage = () => (
    <TransitionAlerts
      message={ errorMessage }
      open={ { value: open, set: setOpen } }
      testId="common_register__element-invalid_register"
      severity="warning"
    />
  );

  return (
    <>
      <h3>Cadastro</h3>
      <form className={ classes.root }>
        <TextField
          value={ name }
          inputProps={ { 'data-testid': 'common_register__input-name' } }
          label="Nome"
          variant="outlined"
          onChange={ (event) => handleChange(setName, event) }
        />
        <TextField
          value={ email }
          inputProps={ { 'data-testid': 'common_register__input-email' } }
          label="Email"
          variant="outlined"
          onChange={ (event) => handleChange(setEmail, event) }
        />
        <TextField
          type="password"
          value={ password }
          inputProps={ { 'data-testid': 'common_register__input-password' } }
          label="Senha"
          variant="outlined"
          onChange={ (event) => handleChange(setPassword, event) }
        />
        <Button
          data-testid="common_register__button-register"
          variant="contained"
          color="primary"
          disabled={ isDisabled }
          onClick={ handleClick }
        >
          Cadastrar
        </Button>
      </form>
      {renderErrorMessage()}
    </>
  );
}
