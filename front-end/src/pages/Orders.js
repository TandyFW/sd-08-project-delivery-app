import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row } from 'react-bootstrap';
import OrderCard from '../components/OrderCard';
import useAxios from '../hooks/useAxios';
import { API_CUSTUMER_ORDER_URL } from '../service/backendApi';

function Orders() {
  const { request, response } = useAxios();
  useEffect(() => request(API_CUSTUMER_ORDER_URL), [request]);
  return (
    <Container>
      <Row xs={ 4 } md={ 2 } className="p-4">
        {
          response && response.data.map((variant, idx) => (
            <Link key={ idx } to={ `/customer/orders/${variant.id}` }>
              <OrderCard requests={ variant } user="customer" />
            </Link>
          ))
        }
      </Row>
    </Container>
  );
}

export default Orders;
