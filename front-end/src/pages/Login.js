import React from 'react';
import { Container } from 'react-bootstrap';
import SignInSide from '../components/SignInSide';
import { LoginProvider } from '../context/LoginProvider';

function Login() {
  return (
    <Container>
      <LoginProvider>
        <SignInSide />
      </LoginProvider>
    </Container>
  );
}

export default Login;
