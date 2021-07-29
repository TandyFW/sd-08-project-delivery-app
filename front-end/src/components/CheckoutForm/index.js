import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { FormControl, Select, MenuItem, Button,
  TextField, FormHelperText } from '@material-ui/core';

import { CheckoutFormBody, Form } from './styled';

import requestApi from '../../services/api';

function CheckoutForm() {
  const history = useHistory();
  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  useEffect(() => {
    const { token } = localStorage.getItem('user') || '';

    requestApi('/users', 'GET', {}, token)
      .then((response) => {
        const bdSellers = response.user.filter(({ role }) => role === 'seller');
        setSellers(bdSellers);
      }).catch((err) => {
        console.warn(err.response);
        const UNAUTHORIZED = 401;
        if (err.response.status === UNAUTHORIZED) logout(history);
      });
  }, [history]);

  return (
    <CheckoutFormBody>
      <FormHelperText>Some important helper text</FormHelperText>
      <Form>
        <FormControl>
          <Select
            value={ seller }
            onChange={ ({ target: { value } }) => { setSeller(value); } }
            displayEmpty
            inputProps={ { 'aria-label': 'Without label' } }
          >
            <MenuItem value="" disabled>
              P.Vendedora Responsável
            </MenuItem>
            { sellers.map(({ name }, i) => <MenuItem key={ i }>{name}</MenuItem>)}
          </Select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Endereço"
          value={ address }
          onChange={ ({ target: { value } }) => { setAddress(value); } }
        />
        <TextField
          id="standard-basic"
          label="Número"
          value={ addressNumber }
          onChange={ ({ target: { value } }) => { setAddressNumber(value); } }
        />
      </Form>
      <Button variant="contained" color="primary">
        Finalizar Pedido
      </Button>
    </CheckoutFormBody>

  );
}

export default CheckoutForm;
