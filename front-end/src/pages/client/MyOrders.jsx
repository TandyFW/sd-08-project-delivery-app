import React from 'react';
// import axios from 'axios';
import NavBar from '../../components/NavBar';
import ListOrders from '../../components/ListOrders';

function MyOrders() {
  // const Orders = async () => {
  //   try {
  //     const ordersCustomer = await axios({
  //       method: 'GET',
  //       url: 'http://localhost:3001/customer/orders',
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };
  return (
    <>
      <NavBar />
      <ListOrders />
    </>
  );
}

export default MyOrders;
