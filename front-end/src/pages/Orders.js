import React, { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import OrderCard from '../components/OrderCard';
import useAxios from '../hooks/useAxios';
import { API } from '../service/backendApi';
import Socket from '../service/socketConfig';
import Header from '../components/Header';

function Orders() {
  const [, route] = useLocation().pathname.split('/');
  const { token } = JSON.parse(localStorage.getItem('user'));
  const hasSeller = route === 'seller';
  const { request, response } = useAxios();

  useEffect(() => request(API[route]), [request, route]);
  useEffect(() => {
    const socket = Socket(token);
    socket.on('server', (server) => {
      console.log(server);
    });
    socket.emit('server');
  }, [token]);
  return (
    <>
      <Header />
      <Container>
        <Row xs={ 1 } md={ 2 } className="pt-4">
          {response
          && response.data.map((variant, idx) => (
            <Link key={ idx } to={ `/${route}/orders/${variant.id}` }>
              <OrderCard requests={ variant } user={ route }>
                {hasSeller && (
                  <Row
                    data-testid={
                      `${route}_orders__element-card-address-${variant.address}`
                    }
                  >
                    <Col className="text-center p-4">
                      {variant.deliveryAddress}
                    </Col>
                  </Row>
                )}
              </OrderCard>
            </Link>
          ))}
        </Row>
      </Container>
    </>
  );
}

export default Orders;
