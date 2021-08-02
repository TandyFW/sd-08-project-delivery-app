import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Select from '@material-ui/core/Select';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { lStorage, request } from '../utils';
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

export default function AddressForm({ itensCheckout }) {
  const classes = useStyles();
  const history = useHistory();

  const { address, number, sellerName, isDisabled, message, open } = useGroupState({
    address: '',
    number: '',
    isDisabled: true,
    sellerName: '',
    message: { text: '', severity: 'warning' },
    open: false,
  });

  const [sellers, setSellers] = useState([]);

  useEffect(() => {
    const getSellers = async () => {
      const { token } = lStorage().user.get();
      const options = {
        headers: {
          Authorization: token,
        },
        method: 'GET',
      };
      const result = await request('users', options);
      setSellers(result);
      sellerName.set(result[0].name);
    };
    if (sellers.length === 0) getSellers();
  }, [sellers, sellerName]);

  useEffect(() => {
    if (address.value && number.value) {
      isDisabled.set(false);
    } else isDisabled.set(true);
  }, [isDisabled, number.value, address.value]);

  useEffect(() => {
    if (message.value.text) {
      open.set(true);
    }
    setTimeout(() => {
      open.set(false);
    }, TWO_AND_A_HALF_SECONDS);
  }, [message.value, open]);

  const handleChange = (callback, event) => {
    callback(event.target.value);
  };

  const getSellerId = () => {
    const sellerSelect = document.querySelector('#seller-name-select');
    const selectedSeller = sellers.filter((seller) => seller.name === sellerSelect.value);
    return selectedSeller[0].id;
  };

  const getTotalPrice = () => {
    const totalPriceString = document.querySelector('#sale-total-price').innerText;
    const totalPrice = parseFloat(parseFloat(totalPriceString.split(' ')[1]
      .replace(',', '.')));
    return totalPrice;
  };

  const handleClick = async (event) => {
    event.preventDefault();
    const { token } = lStorage().user.get();
    const options = {
      headers: {
        Authorization: token,
      },
      body: {
        sellerId: getSellerId(),
        totalPrice: getTotalPrice(),
        deliveryAddress: address.value,
        deliveryNumber: number.value,
        productsList: itensCheckout,
      },
      method: 'POST',
    };
    const userObj = await request('sales', options);
    if (userObj.message) {
      message.set({ text: userObj.message, severity: 'warning' });
    } else {
      const { id } = userObj;
      history.push(`/customer/orders/${id}`);
      // message.set({ text: 'Usuário cadastrado com sucesso', severity: 'success' });
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
          value={ sellerName.value }
          id="seller-name-select"
          onChange={ (event) => handleChange(sellerName.set, event) }
          native
        >
          { sellers.map((seller, index) => (
            <option key={ index } value={ seller.name }>{seller.name}</option>
          )) }
        </Select>
        <TextField
          value={ address.value }
          inputProps={ { 'data-testid': 'customer_checkout__input-address' } }
          label="Endereço"
          variant="outlined"
          onChange={ (event) => handleChange(address.set, event) }
        />
        <TextField
          value={ number.value }
          inputProps={ { 'data-testid': 'customer_checkout__input-addressNumber' } }
          label="Numero"
          variant="outlined"
          onChange={ (event) => handleChange(number.set, event) }
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

AddressForm.propTypes = {
  itensCheckout: PropTypes.arrayOf(PropTypes.object).isRequired,
};
