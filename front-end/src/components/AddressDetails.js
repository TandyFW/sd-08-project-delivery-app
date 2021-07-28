import React, { useContext, useState } from 'react';
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

const data = [
  {
    id: 1,
    descricao: 'Cerveja Stella 250ml',
    quantidade: 3,
    valor: 3.5,
  },
  {
    id: 2,
    descricao: 'Cerveja Skol Latão 450ml',
    quantidade: 4,
    valor: 4.1,
  },
  {
    id: 3,
    descricao: 'Salgadinho Torcido Churrasco',
    quantidade: 1,
    valor: 1.56,
  }];

function AddressDetails() {
  const { userData } = useContext(Context);
  const [seller, setSeller] = useState('');
  const [address, setAddress] = useState('');
  const [number, setNumber] = useState('');
  const [sellers] = useState(dataSellers);
  const totalPrice = data.reduce((acc, curr) => acc + (curr.quantidade * curr.valor), 0)
    .toFixed(2);
  console.log(userData);
  async function handleSubmit() {
    const myInit = {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        token: data.token,
      },
      body: JSON.stringify({
        sellerId: seller,
        totalPrice,
        deliveryAddress: address,
        deliveryNumber: number,
        products: data.map(({ id, quantidade }) => ({ id, quantidade })),
      }),
    };
    const rawResponse = await fetch('http://localhost:3001/customer/order', myInit);
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

export default AddressDetails;
