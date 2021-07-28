import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import OrderCard from '../components/OrderCard';
import useAxios from '../hooks/useAxios';
import { API } from '../service/backendApi';
// seller_orders__element-card-address-<id></id>
function Orders() {
  const [, route] = useLocation().pathname.split('/');
  const { request, response } = useAxios();
  useEffect(() => request(API[route]), [request, route]);
  return (
    <Container>
      <Row xs={ 4 } md={ 2 } className="p-4">
        {
          response && response.data.map((variant, idx) => (
            <Link key={ idx } to={ `/${route}/orders/${variant.id}` }>
              <OrderCard requests={ variant } user={ route }>
                <Col
                  data-testid={
                    `${route}_orders__element-card-address-${variant.id}`
                  }
                  className="text-center p-4"
                >
                  { variant.id }
                </Col>
              </OrderCard>
            </Link>
          ))
        }
      </Row>
    </Container>
  );
}

export default Orders;
