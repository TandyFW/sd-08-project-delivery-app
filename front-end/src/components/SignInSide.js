import React, { useEffect, useState, useContext } from 'react';
import { Form, Button, Spinner } from 'react-bootstrap';
import Joi from 'joi';
import { GlobalContext } from '../context/GlobalProvider';

export default function SignInSide() {
  const { functions: { handleRequestSubmit } } = useContext(GlobalContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidAll, setIsValidAll] = useState(false);
  const [isValidSubmit, setIsValidSubmit] = useState(true);
  const [hasLoading, setHasLoading] = useState(false);

  useEffect(() => {
    const MIN_PASSWORD = 6;
    const schema = Joi.object({
      email: Joi.string()
        .email({
          minDomainSegments: 2,
          tlds: { allow: ['com', 'net'] } }),
      password: Joi.string().min(MIN_PASSWORD),
    });
    const checked = schema.validate({ email, password });
    if (!checked.error) setIsValidSubmit(false);
    else setIsValidSubmit(true);
  }, [email, password]);

  return (
    <Form className="p-4">
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          value={ email }
          data-testid="common_login__input-email"
          onChange={ ({ target }) => setEmail(target.value) }
          type="email"
          placeholder="Enter email"
          disabled={ isValidAll }
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          value={ password }
          data-testid="common_login__input-password"
          onChange={ ({ target }) => setPassword(target.value) }
          type="password"
          placeholder="Password"
          disabled={ isValidAll }
        />
        <Form.Text className="text-muted">
          Bem, nunca compartilhe sua senha com ninguém..
        </Form.Text>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button
          onClick={ (e) => {
            e.preventDefault();
            setHasLoading(true);
            setIsValidAll(true);
            handleRequestSubmit({ email, password });
          } }
          variant="success"
          type="submit"
          size="lg"
          data-testid="common_login__input-button-login"
          disabled={ isValidSubmit || isValidAll }
        >
          Login
          { ' ' }
          <Spinner
            className={ hasLoading ? 'visible' : 'invisible' }
            as="span"
            animation="grow"
            size="sm"
            role="status"
            aria-hidden="true"
          />
        </Button>
        <Button
          variant="secondary"
          type="submit"
          size="lg"
          data-testid="common_login__input-button-register"
          disabled={ isValidAll }
        >
          Ainda não tenho conta
        </Button>
      </div>
    </Form>
  );
}
