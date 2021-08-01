import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import DeliveryContext from '../../context/DeliveryContext';
import * as api from '../../services/api';

import Container from '../../components/Container';
import Input from '../../components/Input/Input';
import { ButtonPrimary } from '../../components/Input/Button';

const RegisterContainer = styled.div`
  align-items: center;
  display: flex;
  justify-content: center;
  min-height: 100vh;
`;

const StyledContainer = styled(Container)`
  width: 500px;
`;

function Register() {
  const [localName, setLocalName] = useState('');
  const [localEmail, setLocalEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const { setName, setEmail,
    setRole, setToken } = useContext(DeliveryContext);

  const history = useHistory();

  const isDisabled = () => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const SEIS = 6;
    const DOZE = 12;
    return !validEmail.test(localEmail)
      || password.length < SEIS
      || localName.length < DOZE;
  };

  async function handleClick() {
    try {
      await api.register(localName, localEmail, password);
      const { name, email, role, token } = await api.login(localEmail, password);
      setName(name);
      setEmail(email);
      setRole(role);
      setToken(token);
      history.push('/customer/products');
    } catch (error) {
      console.log(error);
      setShowWarning(true);
    }
  }

  return (
    <RegisterContainer>
      <StyledContainer>
        <Input
          type="text"
          data-testid="common_register__input-name"
          placeholder="Name"
          value={ localName }
          onChange={ ({ target }) => setLocalName(target.value) }
        />

        <Input
          type="text"
          data-testid="common_register__input-email"
          placeholder="Email"
          value={ localEmail }
          onChange={ ({ target }) => setLocalEmail(target.value) }
        />

        <Input
          type="password"
          data-testid="common_register__input-password"
          placeholder="Senha"
          value={ password }
          onChange={ ({ target }) => setPassword(target.value) }
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
      </StyledContainer>
    </RegisterContainer>
  );
}

export default Register;
