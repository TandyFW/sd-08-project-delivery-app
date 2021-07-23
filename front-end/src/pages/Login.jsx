import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import loginValidation from '../services/loginValidation';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const prefix = 'common_login__';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validBtn, setValidBtn] = useState(true);
  const history = useHistory();

  useEffect(() => {
    const validation = loginValidation
      .validate({ validEmail: email, validPassword: password });
    if (!validation.error) setValidBtn(false);
    else {
      setValidBtn(true);
    }
  }, [email, password]);

  const onClick = () => history.push('/register');

  return (
    <fieldset>
      <Input
        datatestid={ `${prefix}input-email` }
        label="Login"
        onChange={ ({ target }) => setEmail(target.value) }
        value={ email }
        placeholder="Digite seu email"
      />
      <Input
        datatestid={ `${prefix}input-password` }
        label="Senha"
        onChange={ ({ target }) => setPassword(target.value) }
        value={ password }
        placeholder="Digite sua senha"
      />
      <Button
        datatestid={ `${prefix}button-login` }
        label="LOGIN"
        disabled={ validBtn }
      />
      <Button
        datatestid={ `${prefix}button-register` }
        label="Ainda não tenho conta"
        onClick={ onClick }
      />
    </fieldset>
  );
};

export default Login;
