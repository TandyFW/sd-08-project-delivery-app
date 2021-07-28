import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Spinner } from 'react-bootstrap';
import schema from '../lib/validatorRegister';

export default function SignUpSide() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [loginError, setLoginError] = useState(null);
  const history = useHistory();

  const checkValidate = () => {
    const validateInputs = schema.validate({ name, email, password });
    if (validateInputs.error === undefined) {
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/register', {
        name,
        password,
        email,
      });
      history.push('/customer/products');
    } catch (err) {
      setLoginError(err);
      console.log(err);
      console.log(loginError);
    }
  };

  return (
    <Form className="p-4">
      <Form.Group className="mb-3" controlId="registerBasicName">
        <Form.Label>Name</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
          data-testid="common_register__input-name"
          onChange={ ({ target }) => setName(target.value) }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="registerBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          data-testid="common_register__input-email"
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="registerBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          data-testid="common_register__input-password"
          onChange={ ({ target }) => setPassword(target.value) }
        />
        <Form.Text className="text-muted">
          Bem, nunca compartilhe sua senha com ninguém..
        </Form.Text>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button
          variant="success"
          type="submit"
          size="lg"
          data-testid="common_register__button-register"
          onClick={ (e) => handleSubmit(e) }
          disabled={ checkValidate() }
        >
          Cadastrar
          { ' ' }
          <Spinner
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </Button>
        <span
          className={ loginError ? 'visible' : 'invisible' }
          data-testid="common_register__element-invalid_register"
        >
          Email já registrado!
        </span>
      </div>
    </Form>
  );
}
