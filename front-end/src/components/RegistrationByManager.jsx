import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { isValidUserForRegistration, request } from '../utils';
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

  // const [role, setRole] = useState('Admin');
  // const [name, setName] = useState('');
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState('');
  // const [isDisabled, setDisable] = useState(true);
  // const [user, setUser] = useState({});
  // const [open, setOpen] = React.useState(true);

  useEffect(() => {
    isDisabled.set(!isValidUserForRegistration(name.value, email.value, password.value));
  }, [name.value, email.value, password.value, isDisabled]);

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
    user.set(userObj);
    open.set(true);
  };

  // const handleAlert = (bool) => {
  //   setOpen(bool);
  // };

  const renderErrorMessage = () => {
    if ('message' in user) {
      return (
        <TransitionAlerts
          message={ user.message }
          open={ open }
          testId="admin_manage__element-invalid-register"
          severity="warning"
        />
      );
    }
  };

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
        >
          <MenuItem value="seller">Vendedor</MenuItem>
          <MenuItem value="customer">Cliente</MenuItem>
        </Select>
        <Button
          inputProps={ { 'data-testid': 'admin_manage__button-register' } }
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
