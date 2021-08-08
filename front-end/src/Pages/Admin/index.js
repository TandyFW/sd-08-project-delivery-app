import React from 'react';
import AdminRegister from '../../components/AdminRegister';
import Header from '../../components/Header';

import { adminHeaderLinks } from '../../services/HeaderButtons';

function Admin() {
  return (
    <div>
      <Header dinamicButtons={ adminHeaderLinks } />
      <AdminRegister />
    </div>
  );
}

export default Admin;
