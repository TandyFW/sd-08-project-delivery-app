import React from 'react';
import { TopBar, RegistrationByManager } from '../components';

const AdminManage = () => (
  <div>
    <TopBar subject="Gerenciar Usuários" user="Admin" />
    <RegistrationByManager />
  </div>);
export default AdminManage;
