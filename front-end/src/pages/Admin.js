import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Header from '../components/Header';
import AdminForm from '../components/AdminForm';

function Admin() {
  return (
    <>
      <Header />
      <Container fluid>
        <Row
          className="mt-5 justify-content-center"
        >
          <Col className="col" md={ { span: 12 } }>
            <AdminForm />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Admin;
