import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import Navbar from '../components/Navbar';
import CustomerOrderCard from '../components/CustomerOrderCard';
import OrderContext from '../components/OrderContext';
import './CustomerOrders.css';

const CustomerOrders = () => {
  const [user, setUser] = useState({});
  const [ordersList, setOrdersList] = useState([]);
  const history = useHistory();
  const { orders } = useContext(OrderContext);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) return history.push('/login');
    setUser(userData);
    setOrdersList(orders);
  }, [history]);

  return (
    <>
      <Navbar name={ user.name } />
      <section className="order-cards-container">
        { ordersList
          .map((order) => <CustomerOrderCard key={ order.id } order={ order } />) }
      </section>
    </>
  );
};

export default CustomerOrders;
