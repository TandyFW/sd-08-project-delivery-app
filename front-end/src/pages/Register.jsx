import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import registerValidation from '../services/registerValidation';
import Button from '../components/Button';
import Input from '../components/Input';

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
      await axios({
        method: 'post',
        url: 'http://localhost:3001/delivery/users',
        data: { name, email, password },
      });
      history.push('/customer/products');
    } catch (error) {
      setVisible('visible');
    }
  };

  return (
    <>
      <h3>Cadastro</h3>
      <fieldset>
        <Input
          label="Nome"
          datatestid={ `${prefix}input-name` }
          onChange={ ({ target }) => setName(target.value) }
          value={ name }
        />
        <Input
          label="Email"
          datatestid={ `${prefix}input-email` }
          onChange={ ({ target }) => setEmail(target.value) }
          value={ email }
        />
        <Input
          label="Senha"
          datatestid={ `${prefix}input-password` }
          onChange={ ({ target }) => setPassword(target.value) }
          value={ password }
        />
        <Button
          label="CADASTRAR"
          datatestid={ `${prefix}button-register` }
          disabled={ validBtn }
          onClick={ userRegister }
        />
      </fieldset>
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
