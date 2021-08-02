import React from 'react';

class AdminName extends React.Component {
  render() {
    return (
      <label htmlFor="admin-name">
        Nome
        <input
          id="admin-name"
          name="name"
          className="input"
          onChange={ this.handleChange }
          data-testid="admin_manage__input-name"
        />
      </label>
    );
  }
}

export default AdminName;
