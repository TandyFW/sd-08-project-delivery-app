import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';

const MOCK_ORDERS = [
  {
    id: 1,
    user_id: 03,
    seller_id: 02,
    delivery_address: 'pendente',
    unityPrice: '2,49',
    subTotal: '9,96',
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
