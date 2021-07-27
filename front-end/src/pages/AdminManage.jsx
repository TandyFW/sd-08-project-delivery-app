import React from 'react';
import { RegistrationByManager, TopBar } from '../components';

const AdminManage = () => (
  <div>
    <TopBar subject="Gerenciar Usuários" user="Admin" />
    <RegistrationByManager />
  </div>);
export default AdminManage;
