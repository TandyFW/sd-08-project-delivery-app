import React from 'react';

const prefix = 'admin_manage__element-user-table';

export default function UserList() {
  const index = 'teste';
  return (
    <div>
      <table>
        <tr>
          <th>Item</th>
          <th>Nome</th>
          <th>Email</th>
          <th>Tipo</th>
          <th>Excluir</th>
        </tr>
        {}
        <tr>
          <td data-testid={ `${prefix}-item-number-${index}` }>1</td>
          <td data-testid={ `${prefix}-item-name-${index}` }>João</td>
          <td data-testid={ `${prefix}-item-email-${index}` }>joao@gmail.com</td>
          <td data-testid={ `${prefix}-item-role-${index}` }>Vendedor</td>
          <td data-testid={ `${prefix}-item-remove-${index}` }>
            <button type="submit">Excluir</button>
          </td>
        </tr>
      </table>
    </div>
  );
}
