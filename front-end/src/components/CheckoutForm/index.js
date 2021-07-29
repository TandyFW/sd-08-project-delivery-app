import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FormControl, Select, MenuItem, Button,
  TextField, FormHelperText } from '@material-ui/core';

import { CheckoutFormBody, Form } from './styled';

import requestApi, { postSale } from '../../services/api';
import DeliveryContext from '../../context/DeliveryContext';

function CheckoutForm() {
  const history = useHistory();

  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [addressNumber, setAddressNumber] = useState('');

  const { cart } = useContext(DeliveryContext);

  useEffect(() => {
    const { token } = localStorage.getItem('user') || '';

    requestApi('/user', 'GET', {}, token)
      .then((response) => {
        console.log(response);
        const bdSellers = response.users.filter(({ role }) => role === 'seller');
        setSellers(bdSellers);
      }).catch((err) => {
        console.warn(err);
        const UNAUTHORIZED = 401;
        if (err.response.status === UNAUTHORIZED) logout(history);
      });
  }, [history]);

  const finishOrder = () => {
    const userData = JSON.parse(localStorage.getItem('user'));
    console.log('user data', userData);
    const sellerData = JSON.parse(seller);
    console.log('seller data', sellerData);

    const addressData = {
      deliveryAddress: address,
      deliveryNumber: addressNumber,
    };
    postSale(sellerData, userData, addressData, cart)
      .then(({ saleId }) => {
        history.push(`/customer/orders/${saleId}`);
      })
      .catch((err) => {
        console.log(err, err.response);
      });
  };

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
            { sellers.map((thisSeller, i) => (
              <MenuItem
                key={ i }
                value={ JSON.stringify(thisSeller) }
              >
                {thisSeller.name}
              </MenuItem>))}
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
      <Button
        variant="contained"
        color="primary"
        onClick={ finishOrder }
      >
        Finalizar Pedido
      </Button>
    </CheckoutFormBody>

  );
}

export default CheckoutForm;
