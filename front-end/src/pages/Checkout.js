// import React, { useContext, useEffect, useState } from 'react';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Field from '../components/Field';
import OrderTable from '../components/OrderTable';
import Header from '../components/Header';

const data = [
  {
    description: 'cerveja',
    quantity: 1,
    unitValue: 5.00,
  },
  {
    description: 'vinho',
    quantity: 3,
    unitValue: 50.00,
  },
  {
    description: 'cachaça',
    quantity: 2,
    unitValue: 25.10,
  },
];

// method: 'post',
// url: 'http://127.0.0.1:3001/login',
// data: { email, password },

// axios({
//   method: 'get',
//   url: API_PRODUCTS_URL,
// })

// axios({
//   method: 'get',
//   url: API_PRODUCTS_URL,
// })

function Checkout() {
  const [products, setProducts] = useState(data);
  const [sellers, setSellers] = useState('botini');
  const [seller, setSeller] = useState('botini');
  const [address, setAddress] = useState('endereço');
  const [number, setNumber] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const totalPrice = products.reduce((acc, { quantity, unitValue }) => {
      acc += quantity * unitValue;
      return acc;
    }, 0);
    setTotal(totalPrice);
  }, [products]);

  useEffect(() => {
    axios({
      method: 'get',
      url: 'http://127.0.0.1:3001/seller',
    }).then((a) => setSellers(a.data));
  });

  function handleButton() {
    console.log(sellers);
  }

  return (
    <div>
      <Header />
      <OrderTable orderData={ products } onClick={ setProducts } />
      <Field legend="P. Vendedora Responsável" value={ seller } onChange={ setSeller } />
      <Field legend="Endereço" value={ address } onChange={ setAddress } />
      <Field legend="Número" value={ number } onChange={ setNumber } />
      <button type="button" onClick={ handleButton }>Finalizar pedido</button>
      <p>{`Total: R$ ${total.toFixed(2)}`}</p>
    </div>
  );
}

export default Checkout;
