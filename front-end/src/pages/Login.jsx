import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import loginValidation from '../services/loginValidation';
import Button from '../components/Button';
import Input from '../components/Input';

const Login = () => {
  const prefix = 'common_login__';
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validBtn, setValidBtn] = useState(true);
  const [visible, setVisible] = useState('hidden');
  const history = useHistory();

  useEffect(() => {
    const validation = loginValidation.validate({
      validEmail: email,
      validPassword: password,
    });
    if (!validation.error) setValidBtn(false);
    else {
      setValidBtn(true);
    }
  }, [email, password]);

  const onClick = () => history.push('/register');

  const fetchApi = async () => {
    try {
      const { data } = await axios({
        method: 'post',
        url: 'http://localhost:3001/delivery/login',
        data: { email, password },
      });
      console.log(data);
      const userStorage = {
        name: data.user.name,
        email: data.user.email,
        role: data.user.role,
        token: data.token,
      };
      localStorage.setItem('user', JSON.stringify(userStorage));
      if (data.user.role === 'customer') history.push('/customer/products');
      if (data.user.role === 'seller') history.push('/customer/seller');
      if (data.user.role === 'administrator') history.push('/customer/adm');

      // console.log(data);
    } catch (err) {
      setVisible('visible');
    }
  };

  return (
    <>
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
          onClick={ () => fetchApi() }
        />
        <Button
          datatestid={ `${prefix}button-register` }
          label="Ainda não tenho conta"
          onClick={ onClick }
        />
      </fieldset>
      <span
        data-testid={ `${prefix}element-invalid-email` }
        style={ { visibility: visible } }
      >
        Login inválido!
      </span>
    </>
  );
};

export default Login;
