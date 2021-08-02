import React from 'react';

class AdminPassword extends React.Component {
  render() {
    return (
      <label htmlFor="admin-password">
        Senha
        <input
          name="password"
          id="admin-password"
          type="password"
          className="input"
          onChange={ this.handleChange }
          data-testid="admin_manage__input-password"
        />
      </label>
    );
  }
}

export default AdminPassword;
