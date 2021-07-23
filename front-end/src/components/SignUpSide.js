import React from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';

export default function SignUpSide() {
  return (
    <Form className="p-4">
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control type="name" placeholder="Enter name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" />
        <Form.Text className="text-muted">
          Bem, nunca compartilhe sua senha com ninguém..
        </Form.Text>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button variant="success" type="submit" size="lg">
          Criar
          { ' ' }
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </Button>
        <Button variant="secondary" type="submit" size="lg">
          Cancelar
        </Button>
      </div>
    </Form>
  );
}
