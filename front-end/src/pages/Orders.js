import React, { useEffect, useContext } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import OrderCard from '../components/OrderCard';
import useAxios from '../hooks/useAxios';
import { API } from '../service/backendApi';
import { GlobalContext } from '../context/GlobalProvider';
import Header from '../components/Header';

function Orders() {
  const [, route] = useLocation().pathname.split('/');
  const { token } = JSON.parse(localStorage.getItem('user'));
  const hasSeller = route === 'seller';
  const { request, response } = useAxios();

  const { socket } = useContext(GlobalContext);

  useEffect(() => request(API(token)[route]), [request, route, token]);

  useEffect(() => {
    const abc = (obj) => {
      if (obj.role !== route) {
        request(API(token)[route]);
      }
    };
    socket.on('newOrder', (obj) => {
      abc(obj);
    });
    socket.on('updateOrder', (obj) => {
      abc(obj);
    });
    return () => socket.disconnect();
  }, []);

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
