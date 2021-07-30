import React, { useState, useEffect } from 'react';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import { isValidUserForRegistration, request, getPathByRole, lStorage } from '../utils';
import TransitionAlerts from './TransitionAlerts';

// const useStyles = makeStyles((theme) => ({
//   selectEmpty: {
//     marginTop: theme.spacing(2),
//   },
//   root: {
//     display: 'flex',
//     justifyContent: 'space-around',
//     flexWrap: 'wrap',
//     flexDirection: 'column',
//     '& > *': {
//       margin: theme.spacing(1),
//       width: '25ch',
//     },
//   },
// }));

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
      <Grid className={ classes.root } item xs={ 11 } sm={ 8 } md={ 6 } lg={ 4 }>
        <Paper component="form" elevation={ 8 } className={ classes.form }>
          <Typography variant="h4" gutterBottom align="center">
            Cadastro
          </Typography>
          <TextField
            type="text"
            value={ name }
            inputProps={ { 'data-testid': 'common_register__input-name' } }
            label="Nome"
            variant="outlined"
            onChange={ (event) => handleChange(setName, event) }
            margin="dense"
          />
          <TextField
            type="text"
            value={ email }
            inputProps={ { 'data-testid': 'common_register__input-email' } }
            label="Email"
            variant="outlined"
            onChange={ (event) => handleChange(setEmail, event) }
            margin="dense"
          />
          <TextField
            type="password"
            value={ password }
            inputProps={ { 'data-testid': 'common_register__input-password' } }
            label="Senha"
            variant="outlined"
            onChange={ (event) => handleChange(setPassword, event) }
            margin="dense"
          />
          <Button
            type="button"
            data-testid="common_register__button-register"
            variant="contained"
            color="primary"
            disabled={ isDisabled }
            onClick={ handleClick }
          >
            Cadastrar
          </Button>
        </Paper>
      </Grid>
      {renderErrorMessage()}
    </>
  );
}
