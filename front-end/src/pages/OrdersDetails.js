import React from 'react';
import { Container, Row } from 'react-bootstrap';
import OrderDetailsComp from '../components/OrderDetailsComp';
import Header from '../components/Header';

function OrdersDetails() {
  return (
    <>
      <Header />
      <Container>
        <Row
          className="mt-5 justify-content-center"
        >
          <OrderDetailsComp />
        </Row>
      </Container>
    </>
  );
}

export default OrdersDetails;
