import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
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

const TWO_AND_A_HALF_SECONDS = 2500;

export default function AddressForm() {
  const classes = useStyles();

  const { role, name, email, password, isDisabled, message, open } = useGroupState({
    role: 'seller',
    name: '',
    email: '',
    password: '',
    isDisabled: true,
    message: { text: '', severity: 'warning' },
    open: false,
  });

  useEffect(() => {
    isDisabled.set(!isValidUserForRegistration(name.value, email.value, password.value));
  }, [name.value, email.value, password.value, isDisabled]);

  useEffect(() => {
    if (message.value.text) {
      open.set(true);
    }
    setTimeout(() => {
      open.set(false);
    }, TWO_AND_A_HALF_SECONDS);
  }, [message.value]);

  const handleChange = (callback, event) => {
    callback(event.target.value);
  };

  const resetFields = () => {
    name.set('');
    email.set('');
    password.set('');
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
    if (userObj.message) {
      message.set({ text: userObj.message, severity: 'warning' });
    } else {
      resetFields();
      message.set({ text: 'Usuário cadastrado com sucesso', severity: 'success' });
    }
  };

  const renderErrorMessage = () => (
    <TransitionAlerts
      message={ message.value.text }
      open={ open }
      testId="admin_manage__element-invalid-register"
      severity={ message.value.severity }
    />
  );

  return (
    <div>
      <form className={ classes.root }>
        <Select
          inputProps={ { 'data-testid': 'customer_checkout__select-seller' } }
          value={ role.value }
          onChange={ (event) => handleChange(role.set, event) }
          native
        >
          <option value="seller">Vendedor</option>
          <option value="customer">Cliente</option>
        </Select>
        <TextField
          value={ name.value }
          inputProps={ { 'data-testid': 'customer_checkout__input-address' } }
          label="Endereço"
          variant="outlined"
          onChange={ (event) => handleChange(name.set, event) }
        />
        <TextField
          value={ email.value }
          inputProps={ { 'data-testid': 'customer_checkout__input-addressNumber' } }
          label="Numero"
          variant="outlined"
          onChange={ (event) => handleChange(email.set, event) }
        />
        <Button
          data-testid="customer_checkout__button-submit-order"
          variant="contained"
          color="primary"
          disabled={ isDisabled.value }
          onClick={ handleClick }
        >
          FINALIZAR PEDIDO
        </Button>
      </form>
      {renderErrorMessage()}
    </div>
  );
}
