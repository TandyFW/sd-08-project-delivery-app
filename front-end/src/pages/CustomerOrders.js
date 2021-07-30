import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CustomerOrderCard from '../components/CustomerOrderCard';

const MOCK_ORDERS = [
  {
    id: 1,
    status: 'pendente',
    date: '02/07/2021',
    total: '9,96',
  },
  {
    id: 2,
    status: 'pendente',
    date: '03/07/2021',
    total: '20,99',
  },
  {
    id: 3,
    status: 'pendente',
    date: '04/07/2021',
    total: '39,90',
  },
  {
    id: 1,
    status: 'pendente',
    date: '05/07/2021',
    total: '15,25',
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
  }, [history]);

  return (
    <>
      <Navbar name={ user.name } />
      <h1>Pagina de pedidos do cliente</h1>
      { orders.map((order) => <CustomerOrderCard key={ order.id } order={ order } />) }
    </>
  );
};

export default CustomerOrders;
