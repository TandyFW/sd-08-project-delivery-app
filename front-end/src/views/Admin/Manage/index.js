import React, { useContext } from 'react';
import Context from '../../../context/Context';

import NavBar from '../../Components/NavBar';
import Form from './Components/form';
import AdminTable from './Components/table';

const AdminManage = () => {
  const { userData } = useContext(Context);

  return (
    <div>
      <NavBar userType="admin" userName={ userData.name } />
      <Form />
      <AdminTable />
    </div>
  );
};

export default AdminManage;
