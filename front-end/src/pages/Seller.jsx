/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

import NavBar from '../components/NavBar';

const Seller = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const prefix = 'seller_orders__element';
  const [sale, setSale] = useState([]);

  const fetchApi = async () => {
    const { data } = await axios.get('http://localhost:3001/delivery/sellersales', {
      headers: {
        authorization: user.token,
      } });
    setSale(data);
  };

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  return (
    <>
      <NavBar user={ user.name } />
      {
        sale.map((infos) => (
          <>
            <span data-testid={ `${prefix}-order-id-${infos.id}` }>
              { infos.id }
            </span>
            <span data-testid={ `${prefix}-delivery-status-${infos.id}` }>
              { infos.status }
            </span>
            <span data-testid={ `${prefix}-card-price-${infos.id}` }>
              {
                infos.total_price
              }
            </span>
            <span data-testid={ `${prefix}-card-address-${infos.id}` }>
              { infos.delivery_address }
            </span>
            <span>{ infos.delivery_number }</span>
            <span data-testid={ `${prefix}-order-date-${infos.id}` }>
              { infos.sale_date }
            </span>
          </>
        ))
      }
    </>
  );
};

export default Seller;
