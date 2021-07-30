import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

const dataSellers = [
  {
    id: 1,
    name: 'Tatiana',
  },
  {
    id: 2,
    name: 'Carmela',
  },
  {
    id: 3,
    name: 'Rita',
  },
];

function AddressDetails({ cart }) {
  const { userData } = useContext(Context);
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sellers] = useState(dataSellers);
  const totalPrice = cart.reduce((acc, curr) => acc + (curr.quantity * curr.price), 0)
    .toFixed(2);
  async function handleSubmit() {
    const myInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        authorization: userData.token,
      },
      body: JSON.stringify({
        sellerId: seller,
        totalPrice,
        deliveryAddress: address,
        deliveryNumber: number,
        products: cart.map(({ id, quantity }) => ({ id, quantity })),
      }),
    };
    const rawResponse = await fetch('http://localhost:3001/customer/order', myInit);
    console.log(myInit);
    const content = await rawResponse.json();
    console.log(content);
  }

  return (
    <div className="checkout-container">
      <div className="checkout-container-inputs">
        <div className="select-input">
          <p>P/ Vendedora Responsável:</p>
          <select
            value={ seller }
            onChange={ (e) => setSeller(e.target.value) }
            data-testid="customer_checkout__select-seller"
            name="seller"
          >
            {sellers.map((element, index) => (
              <option
                key={ index }
              >
                {element.id}
              </option>
            ))}
          </select>
        </div>
        <label htmlFor="adress">
          Endereço:
          <input
            value={ address }
            onChange={ (e) => setAddress(e.target.value) }
            data-testid="customer_checkout__input-address"
            type="text"
          />
        </label>
        <label htmlFor="number">
          Número:
          <input
            value={ number }
            onChange={ (e) => setNumber(e.target.value) }
            data-testid="customer_checkout__input-addressNumber"
            type="text"
          />
        </label>
      </div>
      <button
        onClick={ handleSubmit }
        data-testid="customer_checkout__button-submit-order"
        className="checkout-btn"
        type="button"
      >
        FINALIZAR PEDIDO
      </button>
    </div>
  );
}

AddressDetails.propTypes = {
  cart: PropTypes.arrayOf(Object).isRequired,
};

export default AddressDetails;
