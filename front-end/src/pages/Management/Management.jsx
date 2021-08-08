import React from 'react';
import NavBar from '../../Components/NavBar/NavBar';
import RegisterNewUserForm from
  '../../Components/RegisterNewUserForm/RegisterNewUserForm';
import UserList from '../../Components/UserList/UserList';

export default function Management() {
  return (
    <div>
      <NavBar label="GERENCIAR USUÁRIOS" />
      <RegisterNewUserForm />
      <UserList />
    </div>
  );
}
