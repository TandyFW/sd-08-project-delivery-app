import React from 'react';

class AdminSelect extends React.Component {
  render() {
    return (
      <label htmlFor="admin-select">
        Tipo
        <select
          id="admin-select"
          name="role"
          type="select"
          className="input"
          data-testid="admin_manage__select-role"
        >
          <option value="administrator">Administrador</option>
          <option value="seller">Vendedor</option>
          <option value="customer">Usuário</option>
        </select>
      </label>
    );
  }
}

export default AdminSelect;
