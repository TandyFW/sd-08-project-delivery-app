import React, { useEffect, useContext, useState } from 'react';
import Context from '../../context/Context';

function SellerOrders() {
  const { userData } = useContext(Context);
  const [orders, setOrders] = useState([]);
  console.log(orders);
  useEffect(() => {
    localStorage.setItem('user', JSON.stringify({
      token: userData.token,
      name: userData.user.name,
      email: userData.user.email,
      role: userData.user.role,
    }));
  }, [userData.token, userData.user.email, userData.user.name, userData.user.role]);

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
      await fetch('http://localhost:3001/order', myInit)
        .then((response) => console.log(response) || response.json())
        .then((data) => setOrders(data.sale))
        .catch((err) => console.log(err));
    }
    getData();
  }, []);

  return (
    <h1>Seller</h1>
		{orders.map((order) => <p>order.status</p>)}
  );
}

export default SellerOrders;
