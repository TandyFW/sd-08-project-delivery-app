import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';

import loginValidation from '../services/loginValidation';
import Button from '../components/Button';
import Input from '../components/Input';
import { Container } from '../styles/pages/Login.styled';

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

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'));
    switch (user && user.role) {
    case 'customer':
      return history.push('/customer/products');
    case 'seller':
      return history.push('/seller/orders');
    case 'administrator':
      return history.push('/admin/manage');
    default:
      break;
    }
  }, [history]);

  const onClick = () => history.push('/register');

  const fetchApi = async () => {
    try {
      const { data } = await axios({
        method: 'post',
        url: 'http://localhost:3001/delivery/login',
        data: { email, password },
      });
      const userStorage = {
        name: data.name,
        email: data.email,
        role: data.role,
        token: data.token,
      };
      localStorage.setItem('user', JSON.stringify(userStorage));
      localStorage.setItem('carrinho', JSON.stringify([]));
      if (data.role === 'customer') history.push('/customer/products');
      if (data.role === 'seller') history.push('/seller/orders');
      if (data.role === 'administrator') history.push('/admin/manage');
    } catch (err) {
      setVisible('visible');
    }
  };

  return (
    <>
      <Container>
        <section className="inputs">
          Login
          <Input
            className="data-input"
            datatestid={ `${prefix}input-email` }
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
            placeholder="Digite seu email"
          />
          Senha
          <Input
            className="data-input"
            datatestid={ `${prefix}input-password` }
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
            placeholder="Digite sua senha"
          />
        </section>
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
      </Container>
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
