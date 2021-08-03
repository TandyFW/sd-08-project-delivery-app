import React, { useContext } from 'react';
import Context from '../../../context/Context';

import NavBar from '../../Components/NavBar';
import Form from './Components/form';

const AdminManage = () => {
  const { userData } = useContext(Context);

  return (
    <div>
      <NavBar userType="admin" userName={ userData.name } />
      <Form />
    </div>
  );
};

export default AdminManage;
