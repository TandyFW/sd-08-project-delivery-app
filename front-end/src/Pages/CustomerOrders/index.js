import React, { useEffect, useState } from 'react';
import axios from 'axios';
import OrderCard from '../../Components/OrderCard';

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3001/sales').then((response) => setOrders(response.result));
  }, []);

  console.log(orders);
  return (
    <div>
      <OrderCard id={ 1 } status="preparando" />
    </div>
  );
};

export default CustomerOrders;
