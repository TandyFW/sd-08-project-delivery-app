import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import colors from '../styles/colors';
import registerValidation from '../services/registerValidation';
import Button from '../components/Button';
import Input from '../components/Input';
import { Container, LogoArea } from '../styles/pages/Login.styled';
import logo from '../images/ja-vou-delivery.gif';

const Register = () => {
  const prefix = 'common_register__';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [validBtn, setValidBtn] = useState(true);
  const [visible, setVisible] = useState('hidden');
  const history = useHistory();

  useEffect(() => {
    const validation = registerValidation
      .validate({ validName: name, validEmail: email, validPassword: password });
    if (!validation.error) setValidBtn(false);
    else {
      setValidBtn(true);
    }
  }, [name, email, password]);

  const userRegister = async () => {
    try {
      const { data } = await axios({
        method: 'post',
        url: 'http://localhost:3001/delivery/users',
        data: { name, email, password },
      });
      const userStorage = {
        name: data.name,
        email: data.email,
        role: data.role,
        token: data.token,
      };
      localStorage.setItem('user', JSON.stringify(userStorage));
      history.push('/customer/products');
    } catch (error) {
      setVisible('visible');
    }
  };

  return (
    <>
      <Container color={ colors.whitesmoke }>
        <LogoArea src={ logo } />
        <section className="inputs">
          <Input
            label="Nome"
            className="data-input"
            datatestid={ `${prefix}input-name` }
            onChange={ ({ target }) => setName(target.value) }
            value={ name }
          />
          <Input
            label="Email"
            className="data-input"
            datatestid={ `${prefix}input-email` }
            onChange={ ({ target }) => setEmail(target.value) }
            value={ email }
          />
          <Input
            label="Senha"
            className="data-input"
            datatestid={ `${prefix}input-password` }
            onChange={ ({ target }) => setPassword(target.value) }
            value={ password }
          />
        </section>
        <Button
          label="CADASTRAR"
          datatestid={ `${prefix}button-register` }
          disabled={ validBtn }
          onClick={ userRegister }
        />
      </Container>
      <span
        data-testid={ `${prefix}element-invalid_register` }
        style={ { visibility: visible } }
      >
        Usuário já cadastrado!
      </span>
    </>
  );
};

export default Register;
