import React from 'react';

class AdminEmail extends React.Component {
  render() {
    return (
      <label htmlFor="admin-email">
        E-mail
        <input
          id="admin-email"
          name="email"
          className="input"
          onChange={ this.handleChange }
          data-testid="admin_manage__input-email"
        />
      </label>
    );
  }
}

export default AdminEmail;
