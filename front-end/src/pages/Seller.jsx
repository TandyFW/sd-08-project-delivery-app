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
  }, []);

  const onClick = (id) => {
    history.push(`/seller/orders/${id}`);
  };

  return (
    <>
      <NavBar show user={ user.name } />
      <Container>
        {sale.map((infos, key) => (
          // <div key={ key }>
          //   <button
          //     type="button"
          //     onClick={ () => onClick(infos.id) }
          //     data-testid={ `${prefix}-order-id-${infos.id}` }
          //   >
          //     {infos.id}
          //   </button>
          //   <span data-testid={ `${prefix}-delivery-status-${infos.id}` }>
          //     {infos.status}
          //   </span>
          //   <span data-testid={ `${prefix}-card-price-${infos.id}` }>
          //     {infos.total_price}
          //   </span>
          //   <span data-testid={ `${prefix}-card-address-${infos.id}` }>
          //     {infos.delivery_address}
          //   </span>
          //   <span>{infos.delivery_number}</span>
          //   <span data-testid={ `${prefix}-order-date-${infos.id}` }>
          //     {infos.sale_date}
          //   </span>
          // </div>

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
