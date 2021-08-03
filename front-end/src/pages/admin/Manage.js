import React, { useState } from 'react';
import * as api from '../../services/api';
import AdminNavbar from '../../components/Navbar/AdminNavbar';
import ListContainer from '../../components/List/ListContainer';
import Input from '../../components/Input/Input';
import Select from '../../components/Input/Select';
import { ButtonPrimary } from '../../components/Input/Button';
import {
  Container,
  CheckoutLabel,
  Section,
  FormContainer,
  Title,
} from '../../styles/pages/customer/Checkout';

const Manage = () => {
  const [selectedRole, setSelectedRole] = useState('seller');
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);

  const roles = [
    { id: 'seller', name: 'Vendedor' },
    { id: 'customer', name: 'Cliente' },
    { id: 'administrator', name: 'Administrador' },
  ];

  const isDisabled = () => {
    const validEmail = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    const SEIS = 6;
    const DOZE = 12;
    return !validEmail.test(userEmail)
    || userPassword.length < SEIS
    || userName.length < DOZE
    || selectedRole === '';
  };

  async function handleClick() {
    console.log(selectedRole);
    try {
      const { token } = JSON.parse(localStorage.getItem('user'));
      const response = await api.newUser({
        name: userName,
        email: userEmail,
        password: userPassword,
        role: selectedRole,
        token,
      });
      console.log(response);
    } catch (error) {
      console.log(error);
      setShowWarning(true);
    }
  }

  const renderForm = () => (
    <Section>
      <Title>Cadastrar novo usuario</Title>
      <ListContainer>
        <FormContainer>
          <CheckoutLabel text="Nome">
            <Input
              data-testid="admin_manage__input-name"
              value={ userName }
              onChange={ ({ target }) => setUserName(target.value) }
            />
          </CheckoutLabel>
          <CheckoutLabel text="Email">
            <Input
              data-testid="admin_manage__input-email"
              value={ userEmail }
              onChange={ ({ target }) => setUserEmail(target.value) }
            />
          </CheckoutLabel>
          <CheckoutLabel text="Senha">
            <Input
              type="password"
              data-testid="admin_manage__input-password"
              value={ userPassword }
              onChange={ ({ target }) => setUserPassword(target.value) }
            />
          </CheckoutLabel>
          <CheckoutLabel text="Tipo">
            <Select
              options={ roles }
              data-testid="admin_manage__select-role"
              value={ selectedRole }
              onChange={ ({ target }) => setSelectedRole(target.value) }
            />
          </CheckoutLabel>
          <ButtonPrimary
            type="button"
            data-testid="admin_manage__button-register"
            disabled={ isDisabled() }
            onClick={ handleClick }
          >
            CADASTRAR
          </ButtonPrimary>
        </FormContainer>
        { showWarning
          && <p data-testid="admin_manage__element-invalid-register">Deu ruim!</p> }
      </ListContainer>
    </Section>
  );

  return (
    <>
      <AdminNavbar />
      <Container>
        { renderForm() }
      </Container>
    </>
  );
};

export default Manage;
