import React, { useContext, useState, useEffect } from 'react';
import Context from '../../context/Context';
import NavBar from '../Components/NavBar/index';
import OrderDetailsCard from '../Components/OrderDetailCard';
import './styles.css';

function SellerOrders() {
  const { userData } = useContext(Context);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify({
      token: userData.token,
      name: userData.name,
      email: userData.email,
      role: userData.role,
    }));
  }, [userData.token, userData.email, userData.name, userData.role]);

  useEffect(() => {
    async function getData() {
      const myInit = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: userData.token,
        },
      };
      await fetch('http://localhost:3001/order/', myInit)
        .then((response) => console.log(response) || response.json())
        .then((data) => setOrders(data.sale))
        .catch((err) => console.log(err));
    }
    getData();
  }, [userData.token]);

  return (
    <div>
      <NavBar userType="seller" userName={ userData.name } />
      { orders.map((order) => <OrderDetailsCard key={ order.id } order={ order } />)}
    </div>
  );
}

export default SellerOrders;
