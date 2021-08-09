import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';
import CartContext from './CartContext';

import '../styles/InputCheckout.css';

function InputCheckout({ seller }) {
  const { total } = useContext(CartContext);
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);
  const [sellerName, setSellerName] = useState('');
  const history = useHistory();

  const handleSell = async (e) => {
    e.preventDefault();
    const nameUser = JSON.parse(localStorage.getItem('user'));
    const cart = JSON.parse(localStorage.getItem('carrinho'));
    await axios.post(
      'http://localhost:3001/customer/checkout',
      {
        name: nameUser.name, seller: sellerName, total, address, number, cart,
      },
      {
        headers: {
          authorization: nameUser.token,
        },
      },
    )
      .then(({ data }) => {
        console.log('data: ', data);
        history.push(`/customer/orders/${data}`);
      })
      .catch((err) => console.log(err));
  };

  const handleAddress = ({ target: { value } }) => {
    setAddress(value);
  };

  const handleNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSellerName = ({ target: { value } }) => {
    setSellerName(value);
  };

  return (
    <div className="delivery-details-container">
      <form>
        <label htmlFor="select-seller">
          <p>P. vendedora resp</p>
          <select
            data-testid="customer_checkout__select-seller"
            onChange={ handleSellerName }
            id="select-seller"
          >
            <option value="default">-</option>
            {seller && seller.map((sellers) => (
              <option
                key={ sellers.name }
                value={ sellers.id }
              >
                { sellers.id }
              </option>))}
          </select>
        </label>
        <label htmlFor="input-address">
          <p>Endereço</p>
          <input
            type="text"
            id="input-address"
            data-testid="customer_checkout__input-address"
            onChange={ handleAddress }
          />
        </label>
        <label htmlFor="input-number">
          <p>Número</p>
          <input
            type="number"
            min="0"
            id="input-number"
            data-testid="customer_checkout__input-addressNumber"
            onChange={ handleNumber }
          />
        </label>
      </form>
      <button
        type="button"
        data-testid="customer_checkout__button-submit-order"
        onClick={ handleSell }
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

InputCheckout.propTypes = {
  seller: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default InputCheckout;
