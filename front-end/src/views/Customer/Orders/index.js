import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Context from '../../../context/Context';
import NavBar from '../../Components/NavBar';
import OrderCard from './components/OrderCard';
import './styles.css';

function Orders() {
  const { userData } = useContext(Context);
  const [orderData, setOrderData] = useState();
  useEffect(() => {
    async function fetchOrder() {
      const myInit = {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
          Authorization: userData.token,
        },
      };
      await fetch('http://localhost:3001/order/', myInit)
        .then((response) => response.json())
        .then((data) => setOrderData(data.sale))
        .catch((err) => console.log(err));
    }
    fetchOrder();
  }, [userData.token]);

  return (
    <div className="main-wrapper-orders">
      <NavBar
        userType={ userData.role }
        userName={ userData.name }
      />
      <div className="orders">
        {orderData && orderData.map((element, index) => (
          <Link key={ index } to={ `/customer/orders/${element.id}` }>
            <OrderCard
              data={ element }
            />
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Orders;
