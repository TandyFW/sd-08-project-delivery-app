import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import useLocalStorage from '../hooks/useLocalStorage';
import * as api from '../services/api';

import FormContainer from '../components/FormContainer';
import Input from '../components/Input';
import { ButtonPrimary } from '../components/Button';

const RegisterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const StyledFormContainer = styled(FormContainer)`
  width: 500px;
`;

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
    <RegisterContainer>
      <StyledFormContainer>
        <Input
          type="text"
          data-testid="common_register__input-name"
          placeholder="Name"
          onChange={ (e) => setName(e.target.value) }
        />
        <Input
          type="text"
          data-testid="common_register__input-email"
          placeholder="Email"
          onChange={ (e) => setEmail(e.target.value) }
        />
        <Input
          type="password"
          data-testid="common_register__input-password"
          placeholder="Senha"
          onChange={ (e) => setPassword(e.target.value) }
        />
        <ButtonPrimary
          type="button"
          data-testid="common_register__button-register"
          disabled={ isDisabled() }
          onClick={ handleClick }
        >
          CADASTRAR
        </ButtonPrimary>
        { showWarning
          && <p data-testid="common_register__element-invalid_register">Deu ruim!</p> }
      </StyledFormContainer>
    </RegisterContainer>
  );
}

export default Register;
