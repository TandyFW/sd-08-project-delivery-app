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
      <h1>Finalizar Pedido</h1>
      <TableCheckout />
      <InputCheckout seller={ sellers } />
    </div>
  );
}
