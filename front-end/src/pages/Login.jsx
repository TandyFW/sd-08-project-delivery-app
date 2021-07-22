import React from 'react';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => (
  <fieldset>
    <Input label="Login" />
    <Input label="Senha" />
    <Button label="LOGIN" />
    <Button label="Ainda não tenho conta" />
  </fieldset>
);

export default Login;
