import axios from 'axios';
import React, { useEffect, useState } from 'react';
import InputCheckout from '../components/InputCheckout';
import TableCheckout from '../components/TableCheckout';
import Navbar from '../components/Navbar';

export default function CustomerCheckout() {
  const [sellers, setSellers] = useState([]);
  const userData = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    async function fetchData() {
      const user = await axios.get('http://localhost:3001/customer/checkout')
        .then((data) => data.data)
        .catch((err) => console.log(err));
      setSellers(user);
    }
    fetchData();
  }, []);

  return (
    <div>
      <Navbar name={ userData.name } activeTab={ 1 } />
      <h2>Finalizar Pedido</h2>
      <TableCheckout />
      <h3>Detalhes e Endereço para Entrega</h3>
      <InputCheckout seller={ sellers } />
    </div>
  );
}
