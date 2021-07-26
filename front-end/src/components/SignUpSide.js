import React from 'react';
import { Form, Button } from 'react-bootstrap';

export default function SignInSide() {
  return (
    <Form className="p-4">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" autoComplete />
        <Form.Text className="text-muted">
          Bem, nunca compartilhe sua senha com ninguém..
        </Form.Text>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="secondary" type="submit" size="lg">
          Cadastrar
        </Button>
      </div>
    </Form>
  );
}
