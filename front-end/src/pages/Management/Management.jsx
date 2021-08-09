import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import RegisterNewUserForm from
  '../../Components/RegisterNewUserForm/RegisterNewUserForm';
import UserList from '../../Components/UserList/UserList';
import Container from './Management.styled';

export default function Management() {
  return (
    <Container>
      <NavBar label="GERENCIAR USUÁRIOS" />
      <RegisterNewUserForm />
      <UserList />
    </Container>
  );
}
