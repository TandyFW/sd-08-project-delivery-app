import React, { useEffect, useState } from 'react';
import { Form, Row, Col, Button } from 'react-bootstrap';
import axios from 'axios';
import schema from '../lib/validatorAdmin';

function Admin() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const [role, setRole] = useState('seller');
  const [disable, setDisable] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const validation = schema.validate({ name, password, email, role });
    if (validation.error === undefined) {
      setDisable(false);
    } else {
      setDisable(true);
    }
  }, [name, password, email, role]);

  const createUser = async () => {
    const storage = localStorage.getItem('user');
    const { token } = JSON.parse(storage);
    try {
      await axios({
        url: 'http://localhost:3001/admin/manage/',
        method: 'post',
        headers: {
          authorization: token,
        },
        data: {
          name,
          password,
          email,
          role,
        },
      });
      setName('');
      setPassword('');
      setEmail('');
      setRole('seller');
      setError(null);
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <Form className="bg-light p-4">
      <Row className="mb-3">
        <Form.Group as={ Col } md="2" controlId="inputName">
          <Form.Label>Nome</Form.Label>
          <Form.Control
            required
            type="text"
            placeholder="Nome"
            onChange={ ({ target }) => setName(target.value) }
            value={ name }
            data-testid="admin_manage__input-name"
          />
        </Form.Group>
        <Form.Group as={ Col } md="2" controlId="inputEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control
            required
            type="email"
            placeholder="Email"
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
            data-testid="admin_manage__input-email"
          />
        </Form.Group>
        <Form.Group as={ Col } md="2" controlId="inputPassword">
          <Form.Label>Senha</Form.Label>
          <Form.Control
            required
            type="password"
            placeholder="Senha"
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
            data-testid="admin_manage__input-password"
          />
        </Form.Group>
        <Form.Group as={ Col } md="2" controlId="inputRole">
          <Form.Label>Tipo</Form.Label>
          <Form.Select
            aria-label="Default select example"
            onChange={ ({ target }) => setRole(target.value) }
            data-testid="admin_manage__select-role"
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </Form.Select>
        </Form.Group>
        <Button
          className="m-4"
          md="2"
          disabled={ disable }
          data-testid="admin_manage__button-register"
          onClick={ createUser }
        >
          Cadastrar
        </Button>
        <span
          className={ error ? 'visible' : 'invisible' }
          data-testid="admin_manage__element-invalid-register"
        >
          { error }
        </span>
      </Row>
    </Form>
  );
}

export default Admin;
