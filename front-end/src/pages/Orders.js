import React, { useEffect, useState } from 'react';
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
  const [bla, setBla] = useState('');
  const [bla2, setBla2] = useState('');
  const socket = Socket(token);

  useEffect(() => request(API(token)[route]), [request, route, token, bla, bla2]);

  // useEffect(() => {
  //   socket.on('newOrder', (string) => {
  //     setBla(string);
  //   });
  //   socket.on('updateOrder', (string) => {
  //     setBla2(string);
  //   });
  // }, [socket]);

  socket.on('newOrder', (string) => {
    setBla(string);
  });
  socket.on('updateOrder', (string) => {
    setBla2(string);
  });

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
                    <Row>
                      <Col
                        className="text-center p-4"
                        data-testid={
                          `${route}_orders__element-card-address-${variant.id}`
                        }
                      >
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
