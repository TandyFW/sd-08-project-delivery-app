import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import api from '../../Apis/api1';

import {
  HeaderAdmin,
  NewUserForm,
  UsersList,
} from '../../components';

const Admin = ({ userRole }) => {
  const [users, setUsers] = useState([]);
  const { token } = JSON.parse(localStorage.getItem('user'));

  // useEffect(() => {
  //   const loadUsers = async () => {
  //     const responseUsers = await api.getAllUsers();
  //     setUsers(responseUsers);
  //   };
  //   loadUsers();
  // }, []);

  useEffect(
    () => api.getAllUsers(token, userRole).then((response) => {
      setUsers(response);
    }),
    [token, userRole],
  );

  return (
    <div>
      <HeaderAdmin />
      <NewUserForm />
      <UsersList users={ users } isAdm={ userRole === 'administrator' } />
    </div>
  );
};

export default Admin;

Admin.propTypes = {
  userRole: PropTypes.string.isRequired,
};
