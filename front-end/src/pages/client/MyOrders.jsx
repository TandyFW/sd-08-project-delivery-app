import React, { useEffect, useState } from 'react';
import axios from 'axios';
import NavBar from '../../components/NavBar';
import ListOrders from '../../components/ListOrders';

function MyOrders() {
  const [ordersCustomer, setOrdersCustomer] = useState([]);
  const prefix = 'customer_orders__';
  const isSeller = false;
  const getOrders = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    const config = {
      method: 'get',
      url: `http://localhost:3001/customer/${user.id}/orders`,
      headers: {
        authorization: user.token,
      },
    };
    axios(config)
      .then((response) => {
        console.log(response.data);
        setOrdersCustomer(response.data);
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
        orders={ ordersCustomer || [] }
        prefix={ prefix }
        isSeller={ isSeller }
      />
    </>
  );
}

export default MyOrders;
