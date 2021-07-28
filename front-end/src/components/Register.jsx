import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useHistory } from 'react-router-dom';
import { isValidUserForRegistration, request } from '../utils';
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

  // const [role, setRole] = useState('Admin');
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
    const userObj = await request('register', 'POST', {
      name,
      email,
      password,
      role: 'customer',
    });
    // console.log('userObj', userObj);
    setUser(userObj);
    if (!userObj.message) {
      history.push('/customer/products');
    }
  };

  const renderErrorMessage = () => {
    if ('message' in user) {
      return (
        <h3
          data-testid="common_register__element-invalid_register"
        >
          {user.message}
        </h3>
      );
    }
  };

  return (
    <>
      <h3>Cadastro</h3>
      <form className={ classes.root }>
        <TextField
          value={ name }
          inputProps={ { 'data-testid': 'common_register__input-name' } }
          id="outlined-basic"
          label="Nome"
          variant="outlined"
          onChange={ (event) => handleChange(setName, event) }
        />
        <TextField
          value={ email }
          inputProps={ { 'data-testid': 'common_register__input-email' } }
          id="outlined-basic"
          label="Email"
          variant="outlined"
          onChange={ (event) => handleChange(setEmail, event) }
        />
        <TextField
          value={ password }
          inputProps={ { 'data-testid': 'common_register__input-password' } }
          id="outlined-basic"
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
      {/* <AlertTransitionSlide title="Imposível cadastrar" text="Usuário já existente" /> */}
    </>
  );
}
