/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrdersTable from '../components/OrdersTable';
import Header from '../components/Header';
import { sendData } from '../services/apiRequest';

export default function DetailOrders() {
  const [loading, setLoading] = useState(false);
  const [currentSell, setCurrentSell] = useState([]);

  const { id } = useParams();
  const thounsand = 1000;

  useEffect(() => {
    setLoading(true);
    sendData('http://localhost:3001/sale/created', id)
      .then((res) => {
        setCurrentSell(res.data.data);
      })
      .catch((err) => {
        console.log(err.response);
      });
    setLoading(false);
  }, [id]);

  return (

    <div>
      <Header />
      <OrdersTable
        orders={ currentSell }
        loading={ loading }
        thounsand={ thounsand }
        dataTestBegin="customer_order_details__element-order-details"
      />
      {loading ? <p>Carregando</p> : console.log(currentSell) }
    </div>

  );
}
