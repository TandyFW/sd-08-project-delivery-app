import React, { useEffect, useState } from 'react';
import OrderCard from '../../Components/OrderCard';
import api from '../../Apis/api1';

const CustomerOrders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => api.getAllSales().then((response) => setOrders(response)), []);

  console.log(orders);

  return (
    <div>
      {orders.length
        && orders.map((order) => <OrderCard key={ order.id } orderData={ order } />)}
    </div>
  );
};

export default CustomerOrders;
