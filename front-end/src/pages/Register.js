import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import useLocalStorage from '../hooks/useLocalStorage';
import * as api from '../services/api';

function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const setToken = useLocalStorage('token')[1];
  const [showWarning, setShowWarning] = useState(false);

  const history = useHistory();

  const isDisabled = () => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const SEIS = 6;
    const DOZE = 12;
    return !validEmail.test(email) || password.length < SEIS || name.length < DOZE;
  };

  async function handleClick() {
    api.register(name, email, password)
      .then(() => {
        console.log('entrei aqui');
        api.login(email, password)
          .then((result) => {
            setToken(result.token);
            history.push('/customer/products');
          });
      })
      .catch((err) => {
        console.log(err);
        setShowWarning(true);
      });
  }

  return (
    <fieldset>
      <input
        type="text"
        data-testid="common_register__input-name"
        placeholder="Name"
        onChange={ (e) => setName(e.target.value) }
      />
      <input
        type="text"
        data-testid="common_register__input-email"
        placeholder="Email"
        onChange={ (e) => setEmail(e.target.value) }
      />
      <input
        type="password"
        data-testid="common_register__input-password"
        placeholder="Senha"
        onChange={ (e) => setPassword(e.target.value) }
      />
      <button
        type="button"
        data-testid="common_register__button-register"
        disabled={ isDisabled() }
        onClick={ handleClick }
      >
        CADASTRAR
      </button>
      { showWarning
        && <p data-testid="common_register__element-invalid_register">Deu ruim!</p> }
    </fieldset>
  );
}

export default Register;
