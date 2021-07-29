import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import api from '../services/api';
import registerValidation from '../services/registerValidation';
import colors from '../styles/colors';
// import statusCode from '../services/statusCode';
import {
  ButtonRegister,
  Container,
  Input,
  NewUserContainer,
  Select,
} from '../styles/pages/AdminManager.styled';

const prefix = 'admin_manage__';

const AdminManager = () => {
  const THREE_SECONDS = 3000;
  const [disabled, setDisabled] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [error, setError] = useState(true);
  const [OK, setOK] = useState(true);

  const registerUser = () => {
    const newUser = { name: userName, email, password, role };
    api
      .post('/delivery/users/admin', newUser)
      .then((response) => {
        if (response) {
          setOK(false);
          setTimeout(() => {
            setOK(true);
          }, TWO_SECONDS);
        }
      })
      .catch((errorMessage) => {
        if (errorMessage) {
          setError(false);
          setTimeout(() => {
            setError(true);
          }, THREE_SECONDS);
        }
      });
  };
  useEffect(() => {
    const validation = registerValidation.validate({
      validName: userName,
      validEmail: email,
      validPassword: password,
    });
    if (!validation.error) setDisabled(false);
    else {
      setDisabled(true);
    }
  }, [userName, email, password]);
  return (
    <>
      <NavBar show user="Nome do Patrão" />
      <Container>
        <h4>Cadastrar novo usuário</h4>
        <NewUserContainer>
          <Input
            onChange={ ({ target }) => setUserName(target.value) }
            data-testid={ `${prefix}input-name` }
            type="text"
            placeholder="Nome e sobrenome"
            autocomplete="off"
          />
          <Input
            onChange={ ({ target }) => setEmail(target.value) }
            data-testid={ `${prefix}input-email` }
            type="text"
            placeholder="seu-email@site.com.br"
            autocomplete="off"
          />
          <Input
            onChange={ ({ target }) => setPassword(target.value) }
            data-testid={ `${prefix}input-password` }
            type="password"
            placeholder="sua senha"
            autocomplete="off"
          />
          <Select
            data-testid={ `${prefix}select-role` }
            onChange={ ({ target }) => setRole(target.value) }
          >
            <option value="seller">Vendedor</option>
            <option value="customer">Cliente</option>
            <option value="administrator">Administrador</option>
          </Select>
          <ButtonRegister
            onClick={ () => registerUser() }
            disabled={ disabled }
            data-testid={ `${prefix}button-register` }
            color={ colors.teal }
          >
            Cadastrar
          </ButtonRegister>
        </NewUserContainer>
        <span hidden={ error } data-testid={ `${prefix}element-invalid-register` }>
          Usuário já cadastrado
        </span>
        <span hidden={ OK }>Usuário Cadastrado com Sucesso!</span>
      </Container>
    </>
  );
};

export default AdminManager;
