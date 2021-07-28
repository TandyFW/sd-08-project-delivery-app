import React, { useEffect, useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { Form, Button, Spinner } from 'react-bootstrap';
import { loginValidator } from '../lib/validator';
import { LoginContext } from '../context/LoginProvider';

export default function SignInSide() {
  const { functions: {
    handleLoginRequest,
  }, values: {
    error: err,
    loading,
  } } = useContext(LoginContext);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isValidSubmit, setIsValidSubmit] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const { error } = loginValidator.validate({ email, password });
    if (!error) setIsValidSubmit(false);
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
          disabled={ loading }
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
          disabled={ loading }
        />
        <Form.Text className="text-muted">
          Bem, nunca compartilhe sua senha com ninguém..
        </Form.Text>
      </Form.Group>
      <div className="d-grid gap-2">
        <Button
          onClick={ (e) => {
            e.preventDefault();
            handleLoginRequest({ email, password });
          } }
          variant="success"
          type="submit"
          size="lg"
          data-testid="common_login__button-login"
          disabled={ isValidSubmit }
        >
          Login
          { ' ' }
          <Spinner
            className={ loading ? 'visible' : 'invisible' }
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
          data-testid="common_login__button-register"
          onClick={ () => history.push('/register') }
          disabled={ loading }
        >
          Ainda não tenho conta
        </Button>
      </div>
      <span
        className={ err ? 'visible' : 'invisible' }
        data-testid="common_login__element-invalid-email"
      >
        { err }
      </span>
    </Form>
  );
}
