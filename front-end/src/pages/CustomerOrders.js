import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MOCK_ORDERS = [
  {
    productId: 3,
    name: 'Antarctica Pilsen 300ml',
    quantity: 4,
    status: 'pendente',
    unityPrice: '2,49',
    subTotal: '9,96',
  },
  {
    productId: 5,
    name: 'Skol 269ml',
    quantity: 3,
    unityPrice: '2,19',
    subTotal: '6,57',
  },
  {
    productId: 7,
    name: 'Becks 330ml',
    quantity: 10,
    unityPrice: '4,99',
    subTotal: '4,99',
  },
  {
    productId: 9,
    name: 'Becks 600ml',
    quantity: 4,
    unityPrice: '8,89',
    subTotal: '35,56',
  },
  {
    productId: 10,
    name: 'Skol Beats Senses 269ml',
    quantity: 1,
    unityPrice: '3,57',
    subTotal: '3,57',
  },
  {
    productId: 11,
    name: 'Stella Artois 275ml',
    quantity: 4,
    unityPrice: '3,49',
    subTotal: '13,96',
  },
];

const CustomerOrders = () => {
  const [user, setUser] = useState({});
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) return history.push('/login');
    setUser(userData);
    setOrders(MOCK_ORDERS);
  });

  return (
    <>
      <Navbar name={ user.name } />
      <h1>Pagina de pedidos do cliente</h1>
      { orders.map((order) => <h2 key={ order.productId }>OrderCard</h2>) }
    </>
  );
};

export default CustomerOrders;
