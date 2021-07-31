import React, { useContext, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Context from '../../../context/Context';
import NavBar from '../../Components/NavBar';
import OrderDetailsTable from './components/OrderDetailsTable';
import StatusNav from './components/StatusNav';
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
      <NavBar userType={ userData.user.role } userName={ userData.user.name } />
      <StatusNav orderData={ orderData } />
      <OrderDetailsTable data={ dataItems } />
    </div>
  );
}

export default OrderDetails;
