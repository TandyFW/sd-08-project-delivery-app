import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import PropTypes from 'prop-types';
import Input from './Input';

const SELECT_ID = 'customer_checkout__select-seller';
const ADDRESS_ID = 'customer_checkout__input-address';
const NUMBER_ID = 'customer_checkout__input-addressNumber';
const SUBMIT_ID = 'customer_checkout__button-submit-order';

function FormCheckout({ values }) {
  const { sellers, products, totalPrice } = values;
  const [seller, setSeller] = useState(sellers[0].id);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');

  function handleSelect(event) {
    setSeller(event.target.value);
  }

  const history = useHistory();
  function handleButton() {
    const productList = products.map(({ id, quantity }) => ({ id, quantity }));
    const newSale = {
      sellerId: seller,
      totalPrice,
      deliveryAddress: address,
      deliveryNumber: number,
      status: 'Pendente',
      productList,
    };

    localStorage.setItem('carrinho', JSON.stringify({}));
    const user = localStorage.getItem('user');
    const { token } = JSON.parse(user);

    axios({
      method: 'post',
      url: 'http://127.0.0.1:3001/customer/checkout',
      headers: { authorization: token },
      data: newSale,
    }).then(({ data: { id } }) => history.push(`/customer/orders/${id}`));
  }

  return (
    <>
      <span>P. Vendedora Responsável</span>
      <select data-testid={ SELECT_ID } onChange={ handleSelect }>
        { sellers.map(({ id, name }) => (
          <option key={ id } value={ id }>
            { name }
          </option>
        )) }
      </select>
      <Input
        testid={ ADDRESS_ID }
        legend="Endereço"
        onChange={ setAddress }
        value={ address }
      />
      <Input
        testid={ NUMBER_ID }
        legend="Número"
        onChange={ setNumber }
        value={ number }
      />
      <button type="button" data-testid={ SUBMIT_ID } onClick={ handleButton }>
        Finalizar pedido
      </button>
    </>
  );
}

FormCheckout.propTypes = {
  values: PropTypes.shape({
    sellers: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
      }),
    ).isRequired,
    products: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        quantity: PropTypes.number,
      }),
    ).isRequired,
    totalPrice: PropTypes.number.isRequired,
  }).isRequired,

};

export default FormCheckout;
