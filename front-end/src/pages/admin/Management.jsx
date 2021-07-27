import React from 'react';
import AdminForm from '../../components/AdminForm';
import NavBar from '../../components/NavBar';

function Management() {
  const headerButtons = [
    {
      label: 'GERENCIAR USUÁRIOS',
      href: '/admin/manage',
    },
  ];

  return (
    <div>
      <NavBar headerButtons={ headerButtons } />
      <AdminForm />
    </div>
  );
}

export default Management;
