/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

import NavBar from '../components/NavBar';
import { Container } from '../styles/pages/Orders.styled';
import CardOrder from '../components/CardOrder';

const Seller = () => {
  const user = JSON.parse(localStorage.getItem('user'));
  const history = useHistory();
  const prefix = 'seller_orders__';
  const [sale, setSale] = useState([]);

  const fetchApi = async () => {
    const { data } = await axios.get(
      'http://localhost:3001/delivery/sellersales',
      {
        headers: {
          authorization: user.token,
        },
      },
    );
    setSale(data);
  };

  useEffect(() => {
    fetchApi();
  }, [fetchApi]);

  const onClick = (id) => {
    history.push(`/seller/orders/${id}`);
  };

  return (
    <>
      <NavBar user={ user.name } show />
      <Container>
        {sale.map((infos, key) => (
          <CardOrder
            key={ key }
            address={ `${infos.delivery_address}, ${infos.delivery_number}` }
            prefix={ prefix }
            id={ infos.id }
            deliveryStatus={ infos.status }
            orderDate={ infos.sale_date }
            price={ infos.total_price }
            onClick={ () => onClick(infos.id) }
          />
        ))}
      </Container>
    </>
  );
};

export default Seller;
