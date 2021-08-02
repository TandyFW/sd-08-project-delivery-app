import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';

import axios from 'axios';
import CartContext from './CartContext';

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
    console.log(nameUser.name);
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
      .then(({ data }) => history.push(`/customer/orders/${data}`))
      .catch((err) => console.log(err));
  };

  const handleAddress = ({ target: { value } }) => {
    setAddress(value);
  };

  const handleNumber = ({ target: { value } }) => {
    setNumber(value);
  };

  const handleSellerName = ({ target: { value } }) => {
    console.log(value);
    setSellerName(value);
  };

  return (
    <div>
      <h1>Detalhes e Endereço para Entrega</h1>
      <form>
        <legend
          id="select-seller"
        >
          P. vendedora responsável
        </legend>
        <select
          data-testid="customer_checkout__select-seller"
          onChange={ handleSellerName }
          id="select-seller"
        >
          <option value="default">-</option>
          {seller && seller.map((sellers) => (
            <option
              key={ sellers.id }
              value={ sellers.name }
            >
              { sellers.name }
            </option>))}
        </select>
        <legend
          id="input-address"
        >
          Endereço
        </legend>
        <input
          type="text"
          id="input-address"
          data-testid="customer_checkout__input-address"
          onChange={ handleAddress }
        />
        <legend
          id="input-number"
        >
          Número
        </legend>
        <input
          type="number"
          min="0"
          id="input-number"
          data-testid="customer_checkout__input-addressNumber"
          onChange={ handleNumber }
        />
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
