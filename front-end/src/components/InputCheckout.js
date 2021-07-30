import React, { useState } from 'react';
import axios from 'axios';

function InputCheckout({ seller }) {
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState(0);
  const [sellerName, setSellerName] = useState('');

  const handleSell = async (e) => {
    e.preventDefault();
    const nameUser = JSON.parse(localStorage.getItem('user'));
    await axios.post('http://localhost:3001/customer/checkout', {
      name: nameUser.name, seller: sellerName, address, number
    })
    .then((data) => data)
    .catch((err) => console.log(err));
    console.log(nameUser.name, number, address, sellerName);
  }
  
  const handleAddress = ({ target: { value } }) => {
    setAddress(value);
  }

  const handleNumber = ({ target: { value } }) => {
    setNumber(value);
  }

  const handleSellerName = ({ target: { value } }) => {
    setSellerName(value);
  }

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
        onChange={ handleSellerName }
          id="select-seller"
          data-testid="customer_checkout__select-seller"
        >
          <option value="default">-</option>
          {seller && seller.map((sellers) => {
          return (<option
            key={ sellers.name }
            value={ sellers.name }
          >{ sellers.name }</option>)
        })}
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
  )
  
}

export default InputCheckout;