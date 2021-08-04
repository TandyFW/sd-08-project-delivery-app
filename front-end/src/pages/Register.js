import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import RegisterUser from '../components/RegisterUser';

function Register() {
  return (
    <Container>
      <Row
        className="mt-5 justify-content-center"
      >
        <Col className="col" md={ { span: 6 } }>
          <RegisterUser />
        </Col>
      </Row>
    </Container>
  );
}

export default Register;
