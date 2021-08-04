import React from 'react';
import { RegistrationByManager, NavBar } from '../components';
import UserTable from '../components/AdminComponents/UserTable';
import { lStorage } from '../utils';

const AdminManage = () => {
  const { name } = lStorage().user.get();
  return (
    <>
      <NavBar userType="administrator" userName={ name } />
      <RegistrationByManager />
      <UserTable />
    </>
  );
};
export default AdminManage;
