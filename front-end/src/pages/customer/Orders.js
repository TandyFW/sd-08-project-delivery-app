import React from 'react';
import { useParams } from 'react-router-dom';

const Orders = () => {
  const { id } = useParams();
  return (
    <h1>{ `Order ${id}` }</h1>
  );
};

export default Orders;
