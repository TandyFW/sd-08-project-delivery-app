import React from 'react';
import PropTypes from 'prop-types';

function UsersTable({ usersData }) {
  return (
    <table>
      <thead>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>E-mail</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
      </thead>
      <tbody>
        { usersData.map((user, index) => {
          if (user.role !== 'administrator') {
            return (
              <tr key={ user.id }>
                <td
                  data-testid={ `admin_manage__element-user-table-item-number-${index}` }
                >
                  {user.id}
                </td>
                <td data-testid={ `admin_manage__element-user-table-name-${index}` }>
                  {user.name}
                </td>
                <td data-testid={ `admin_manage__element-user-table-email-${index}` }>
                  {user.email}
                </td>
                <td data-testid={ `admin_manage__element-user-table-item-role-${index}` }>
                  {user.role}
                </td>
                <td>
                  <button
                    data-testid={ `admin_manage__element-user-table-remove-${index}` }
                    type="button"
                  >
                    Excluir
                  </button>
                </td>
              </tr>
            );
          }
          return null;
        })}
      </tbody>
    </table>
  );
}

UsersTable.propTypes = {
  usersData: PropTypes.arrayOf(PropTypes.any).isRequired,
};

export default UsersTable;
