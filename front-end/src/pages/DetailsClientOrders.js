/* eslint-disable */
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import OrdersClientTable from '../components/OrdersClientTable';
import Header from '../components/Header';
import Loading from '../components/Loading';
import { sendData, updateSale } from '../services/apiRequest';

export default function DetailsClientOrders() {
  const [loading, setLoading] = useState(false);
  const [currentSell, setCurrentSell] = useState([]);
  const { id } = useParams();
  const status = { 1: 'Pendente', 2: 'Preparando', 3: 'Em Trânsito', 4: 'Entregue' };

  useEffect(() => {
    setLoading(true);
    sendData('http://localhost:3001/sale/created', id)
      .then(({ data }) => {
        setCurrentSell(data);
      })
      .catch((err) => console.log(err));
    setLoading(false);
  }, [id]);

  const updateOnClick = (idSale, status) => {
    setLoading(true);
    updateSale('http://localhost:3001/update/sale', idSale, status)
      .then(({ data }) => {
        const updateSell = { ...currentSell[0], ...data };
        setCurrentSell([updateSell]);
      });
    setLoading(false);
  };

  return (
    <>
      <Header />
      {console.log(loading)}
      {loading ? <Loading /> : <OrdersClientTable
        orders={ currentSell }
        updateOnClick={ updateOnClick }
        dataTestPrefix="customer_order_details__element-order-"
        status={ status }
      />}
    </>
  );
}
