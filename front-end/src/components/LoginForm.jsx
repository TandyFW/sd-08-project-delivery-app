import React, { useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/styles';
import { useGroupState } from '../hooks';
import { isValidForLogin, request, getPathByRole,
  getUserObjByToken, lStorage } from '../utils';
import TransitionAlerts from './TransitionAlerts';

const useStyles = makeStyles((theme) => ({
  form: {
    width: '100%',
    maxWidth: '560px',
    display: 'flex',
    marginInline: 'auto',
    flexDirection: 'column',
    backgroundColor: theme.palette.background.form,
    '& > *': {
      margin: theme.spacing(2),
    },
    '& > div + div': {
      marginTop: theme.spacing(0),
    },
    '& > button:first-of-type': {
      marginBottom: theme.spacing(1),
      marginTop: theme.spacing(2),
    },
    '& > :last-child': {
      marginTop: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
}));

const LoginForm = () => {
  const classes = useStyles();
  const history = useHistory();
  const { email, password, isDisable, openAlert } = useGroupState({
    email: '', password: '', isDisable: true, openAlert: false });

  useEffect(() => {
    isDisable.set(!isValidForLogin(email.value, password.value));
  }, [email.value, password.value, isDisable]);

  useEffect(() => {
    const user = lStorage().user.get();
    if (user && user.token) {
      const { role } = getUserObjByToken(user.token);
      const homePage = getPathByRole(role);
      history.push(homePage);
    }
  }, [history]);

  const handleChange = (callback, event) => {
    callback(event.target.value);
  };

  const hadleSubmit = async () => {
    const options = {
      body: {
        email: email.value,
        password: password.value,
      },
      method: 'POST',
    };

    const { token, message } = await request('login', options);

    if (message) openAlert.set(true);
    else {
      const user = getUserObjByToken(token);
      lStorage().user.set(user);
      const homePage = getPathByRole(user.role);
      history.push(homePage);
    }
  };

  const handleRegister = () => {
    history.push('/register');
  };

  return (
    <>
      <Grid className={ classes.root } item xs={ 11 } sm={ 8 } md={ 6 } lg={ 4 }>
        <Paper component="form" elevation={ 8 } className={ classes.form }>
          <img src="images/undraw_On_the_way_re_swjt.svg" alt="logo" />
          <TextField
            type="text"
            variant="outlined"
            label="Email"
            value={ email.value }
            onChange={ (event) => handleChange(email.set, event) }
            inputProps={ { 'data-testid': 'common_login__input-email' } }
            margin="dense"
          />
          <TextField
            type="password"
            variant="outlined"
            label="Senha"
            value={ password.value }
            onChange={ (event) => handleChange(password.set, event) }
            inputProps={ { 'data-testid': 'common_login__input-password' } }
            margin="dense"
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
      <TransitionAlerts
        open={ openAlert }
        severity="warning"
        message="Usuário ou senha inválido(a)"
        testId="common_login__element-invalid-email"
      />
    </>
  );
};

export default LoginForm;
