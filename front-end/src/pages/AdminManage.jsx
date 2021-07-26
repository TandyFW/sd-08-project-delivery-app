import React from 'react';
import Components from '../components';

const AdminManage = () => (
  <div>
    <Components.TopBar subject="Gerenciar Usuários" user="Admin" />
    <Components.RegistrationByManager />
  </div>);
export default AdminManage;
