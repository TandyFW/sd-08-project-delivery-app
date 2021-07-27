import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { useGroupState } from '../hooks';
import { isValidForLogin, request } from '../utils';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.form,
    '& > *': {
      margin: theme.spacing(2),
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const { email, password, isDisable } = useGroupState({
    email: '', password: '', isDisable: true });

  useEffect(() => {
    isDisable.set(!isValidForLogin(email.value, password.value));
  }, [email.value, password.value, isDisable]);

  const handleChange = (callback, event) => {
    callback(event.target.value);
  };

  const hadleSubmit = async () => {
    const { token, message } = await request('/login', 'POST',
      { email: email.value, password: password.value });

    // if (message)
    history.push('/customer/products');
  };

  const handleRegister = () => {
    history.push('/register');
  };

  return (
    <Grid item xs={ 12 } sm={ 8 } md={ 6 } lg={ 4 }>
      <Paper component="form" className={ classes.form }>
        <TextField
          variant="outlined"
          label="Email"
          value={ email.value }
          onChange={ (event) => handleChange(email.set, event) }
          inputProps={ { 'data-testid': 'common_login__input-email' } }
        />
        <TextField
          variant="outlined"
          label="Senha"
          value={ password.value }
          onChange={ (event) => handleChange(password.set, event) }
          inputProps={ { 'data-testid': 'common_login__input-password' } }
        />
        <Button
          type="button"
          variant="contained"
          onClick={ hadleSubmit }
          disabled={ isDisable.value }
          color="primary"
          data-testid="common_login__button-login"
        >
          Login
        </Button>
        <Button
          type="button"
          variant="outlined"
          onClick={ handleRegister }
          color="secondary"
          data-testid="common_login__button-register"
        >
          Registre-se
        </Button>
      </Paper>
    </Grid>
  );
};

export default LoginForm;
