import React, { useEffect, useState } from 'react';
import NavBar from '../components/NavBar';
import UserList from '../components/UserList';
import api from '../services/api';
import registerValidation from '../services/registerValidation';
import { ErrorMessage, ListHeader } from '../styles/pages/SellerDetails.styled';
import colors from '../styles/colors';
import {
  ButtonRegister,
  Container,
  Input,
  NewUserContainer,
  Select,
} from '../styles/pages/AdminManager.styled';

const prefix = 'admin_manage__';
const getUsers = async () => {
  const result = await api.get('/delivery/users');
  return result.data;
};
const convertRole = (role) => {
  let result = '';
  switch (role) {
  case 'seller':
    result = 'Vendedor';
    break;
  case 'administrator':
    result = 'Administrador';
    break;
  case 'customer':
    result = 'Cliente';
    break;
  default:
  }
  return result;
};

const AdminManager = () => {
  const THREE_SECONDS = 3000;
  const [disabled, setDisabled] = useState(true);
  const [userName, setUserName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('seller');
  const [error, setError] = useState(true);
  const [OK, setOK] = useState(true);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const userBar = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    let mounted = true;
    setLoading(true);
    getUsers().then((response) => {
      if (mounted) {
        setUsers(response);
        setLoading(false);
      }
    });
    return () => {
      mounted = false;
      return mounted;
    };
  }, [OK]);
  const registerUser = () => {
    const newUser = { name: userName, email, password, role };
    api
      .post('/delivery/users/admin', newUser)
      .then((response) => {
        if (response) {
          setOK(!OK);
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
      <NavBar show user={ userBar.name } contextPage="GERENCIAR USUÁRIOS" />
      <Container>
        <h4>Cadastrar novo usuário</h4>
        <ErrorMessage
          hidden={ error }
          data-testid={ `${prefix}element-invalid-register` }
        >
          Usuário já cadastrado
        </ErrorMessage>
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
        <h4>Lista de usuários</h4>
        <Container className="user-list">
          <ListHeader className="user-list">
            <span>Item</span>
            <span>Nome</span>
            <span>E-mail</span>
            <span>Tipo</span>
            <span>Excluir</span>
          </ListHeader>
          {!loading
            && users.map((user, index) => (
              <UserList
                key={ user.id }
                id={ user.id }
                index={ index + 1 }
                name={ user.name }
                email={ user.email }
                userType={ convertRole(user.role) }
                setOK={ setOK }
                OK={ OK }
              />
            ))}
        </Container>
      </Container>
    </>
  );
};

export default AdminManager;
