import React, { useContext, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Col, Container, Row } from 'react-bootstrap';
import OrderCard from '../components/OrderCard';
import useAxios from '../hooks/useAxios';
import { API } from '../service/backendApi';
import Header from '../components/Header';
import { GlobalContext } from '../context/GlobalProvider';

function Orders() {
  const { values: { storedLS } } = useContext(GlobalContext);
  const [, route] = useLocation().pathname.split('/');
  const hasSeller = route === 'seller';
  const { request, response } = useAxios();
  console.log(storedLS);
  useEffect(() => request(API(storedLS.token)[route]), [request, route, storedLS]);
  return (
    <>
      <Header />
      <Container>
        <Row xs={ 1 } md={ 2 } xl={ 3 } className="pt-4">
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
