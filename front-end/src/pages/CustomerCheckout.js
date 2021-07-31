import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputCheckout from '../components/InputCheckout';
import TableCheckout from '../components/TableCheckout';

export default function CustomerCheckout() {
  const [sellers, setSellers] = useState([]);

  useEffect(async () => {
    const user = await axios.get('http://localhost:3001/customer/checkout')
      .then((data) => data.data)
      .catch((err) => console.log(err));
    setSellers(user);
  }, []);

  return (
    <div>
      <h1>Finalizar Pedido</h1>
      <TableCheckout />
      <InputCheckout seller={ sellers } />
    </div>
  );
}
