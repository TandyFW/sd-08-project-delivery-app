import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../context/Context';
import OrderDetailsTable from './components/OrderDetailsTable';
import './styles.css';

function OrderDetails() {
  const { userData } = useContext(Context);
  const { id: orderId } = useParams();
  const [orderData, setOrderData] = useState([]);
  const dataItems = orderData.salesProducts || [];
  async function fetchOrder() {
    const myInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: userData.token,
      },
    };
    await fetch(`http://localhost:3001/order/${orderId}`, myInit)
      .then((response) => response.json())
      .then((data) => setOrderData(...data.sale))
      .catch((err) => console.log(err));
  }
  useEffect(() => {
    fetchOrder();
  }, []);
  return (
    <div className="main-wrapper-details">
      <div className="order-status">
        <p>{`ID DO PEDIDO: ${orderData.id}`}</p>
        <p>{`VENDEDOR: ${orderData.sellerId}`}</p>
        <p>{`DATA: ${orderData.saleDate}`}</p>
        <p>{`STATUS: ${orderData.status}`}</p>
        <button type="button">MARCAR COMO ENTREGUE</button>
      </div>
      <OrderDetailsTable data={ dataItems } />
    </div>
  );
}

export default OrderDetails;
