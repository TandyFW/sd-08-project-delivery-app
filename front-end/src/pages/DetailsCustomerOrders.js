/* eslint-disable */

import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrdersTable from '../components/OrdersTable';
import Header from '../components/Header';
import { sendData, updateSale } from '../services/apiRequest';

export default function DetailsCustomerOrders() {
  const [loading, setLoading] = useState(false);
  // const [disable, setDisable] = useState(true);
  // const [identification, setId] = useState([]);
  // const [saleData, setSaleData] = useState('')
  const [currentSell, setCurrentSell] = useState([]);
  const { id } = useParams();
  const thounsand = 1000;

  useEffect(() => {
    setLoading(true);
    sendData('http://localhost:3001/sale/created', id)
      .then((res) => {
        setCurrentSell(res.data.data);
        // setId(res.data.data.map(item => item.status))
        // if (identification.includes("Em Transito", "Preparando")) return setDisable(false)
      })
      .catch((err) => {
        console.log(err.response);
      });
    setLoading(false);
  }, [id]);

  // const StatusEntregue = (id) => {
  //   setLoading(true);
  //   getSell('http://localhost:3001/salesId', id, delivered)
  //     .then((data) => {
  //       setSaleData(data.data.status);
  //     });
  //   setLoading(false);
  // }

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
      <OrdersTable
        orders={ currentSell }
        loading={ loading }
        thounsand={ thounsand }
        // delivered={StatusEntregue}
        updateOnClick={ updateOnClick }
        dataTestBegin="customer_order_details__"
      />
    </div>
  );
}
