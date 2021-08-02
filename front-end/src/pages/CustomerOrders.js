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
  const { getOrders } = useContext(OrderContext);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    if (!userData) return history.push('/login');
    setUser(userData);
    const updateOrders = async () => {
      const orders = await getOrders();
      setOrdersList(orders);
    };
    updateOrders();
  }, [history]);

  return (
    <>
      <Navbar name={ user.name } />
      <section className="order-cards-container">
        { console.log('ordersListPage: ', ordersList) }
        { ordersList
          .map((order) => <CustomerOrderCard key={ order.id } order={ order } />) }
      </section>
    </>
  );
};

export default CustomerOrders;
