import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import SignInSide from '../components/SignInSide';
import { LoginProvider } from '../context/LoginProvider';

function Login() {
  return (
    <Container>
      <Row
        className="mt-5 justify-content-center"
      >
        <Col className="col" md={ { span: 6 } }>
          <LoginProvider>
            <SignInSide />
          </LoginProvider>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
