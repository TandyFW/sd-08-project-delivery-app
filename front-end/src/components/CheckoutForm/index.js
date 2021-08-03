import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';

import { FormControl, Button,
  TextField, FormHelperText } from '@material-ui/core';

import { CheckoutFormBody, Form } from './styled';

import requestApi, { postSale } from '../../services/api';
import DeliveryContext from '../../context/DeliveryContext';

// Select, MenuItem,

function CheckoutForm() {
  const history = useHistory();

  const [sellers, setSellers] = useState([]);
  const [seller, setSeller] = useState(0);
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

    const addressData = {
      deliveryAddress: address,
      deliveryNumber: addressNumber,
    };
    postSale(seller, userData, addressData, cart)
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
          <select
            value={ seller }
            onChange={ ({ target: { value } }) => { setSeller(value); } }
            data-testid="customer_checkout__select-seller"
          >
            <option>
              Vendedor
            </option>
            { sellers.map((thisSeller, i) => (
              <option
                key={ i }
                value={ thisSeller.id }
              >
                {thisSeller.name}
              </option>))}
          </select>
        </FormControl>
        <TextField
          id="standard-basic"
          label="Endereço"
          value={ address }
          onChange={ ({ target: { value } }) => { setAddress(value); } }
          inputProps={
            { 'data-testid': 'customer_checkout__input-address' }
          }
        />
        <TextField
          id="standard-basic"
          label="Número"
          value={ addressNumber }
          onChange={ ({ target: { value } }) => { setAddressNumber(value); } }
          type="number"
          min="0"
          inputProps={
            { 'data-testid': 'customer_checkout__input-addressNumber' }
          }
        />
      </Form>
      <Button
        variant="contained"
        color="primary"
        onClick={ finishOrder }
        data-testid="customer_checkout__button-submit-order"
      >
        Finalizar Pedido
      </Button>
    </CheckoutFormBody>

  );
}

export default CheckoutForm;
