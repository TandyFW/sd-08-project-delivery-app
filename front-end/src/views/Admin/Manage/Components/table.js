import React, { useContext, useEffect, useState } from 'react';
import Context from '../../../../context/Context';

function AdminTable() {
  const { userData, cadUser } = useContext(Context);
  const [data, setData] = useState([]);
  useEffect(() => {
    const myInit = {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        Authorization: userData.token,
      },
    };
    fetch('http://localhost:3001/admin/users', myInit)
      .then((response) => response.json())
      .then((result) => setData(result.user));
  }, [cadUser]);
  return (
    <div className="main-wrapper-table">
      <table className="checkout-table">
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
          {data.map((element, index) => (
            <tr key={ index }>
              <td
                data-testid={ `admin_manage__element-user-table-item-number-${index}` }
              >
                {index + 1}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-name-${index}` }
              >
                {element.name}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-email-${index}` }
              >
                {element.email}
              </td>
              <td
                data-testid={ `admin_manage__element-user-table-role-${index}` }
              >
                {element.role}
              </td>
              <button
                data-testid={ `admin_manage__element-user-table-remove-${index}` }
                type="button"
              >
                Excluir
              </button>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default AdminTable;
