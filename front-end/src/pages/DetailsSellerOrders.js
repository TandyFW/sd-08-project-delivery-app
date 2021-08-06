/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrdersSellerTable from '../components/OrdersSellerTable';
import Header from '../components/Header';
import { sendData, updateSale } from '../services/apiRequest';

export default function DetailsSellersOrders() {
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
    <div>
      <Header />
      <OrdersSellerTable
        orders={ currentSell }
        loading={ loading }
        thounsand={ thounsand }
        updateOnClick={ updateOnClick }
        dataTestBegin="seller_order_details__"
      />
    </div>
  );
}
