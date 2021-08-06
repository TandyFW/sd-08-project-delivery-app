import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import ListOrders from '../../components/ListOrders';

function Orders() {
  const [ordersSeller, setOrdersSeller] = useState([]);
  const prefix = 'seller_orders__';
  const isSeller = true;
  const getOrders = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
      method: 'get',
      url: `http://localhost:3001/seller/${user.id}/orders`,
      headers: {
        authorization: user.token,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        setOrdersSeller(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    getOrders();
  }, []);

  return (
    <>
      <NavBar />
      <ListOrders
        orders={ ordersSeller || [] }
        prefix={ prefix }
        isSeller={ isSeller }
      />
    </>
  );
}

export default Orders;
