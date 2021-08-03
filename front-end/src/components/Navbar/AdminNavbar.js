import React from 'react';
import Navbar from './Navbar';
import Item from '../../styles/components/Navbar/CustomerNavbar';

const AdminNavbar = () => (
  <Navbar>
    <Item
      to="/admin/manage"
    >
      GERENCIAR USUARIOS
    </Item>
  </Navbar>
);

export default AdminNavbar;
